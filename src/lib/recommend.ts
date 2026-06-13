import { Course } from "@/data/courses";

export type UserInput = {
  year: string;
  interests: string[];
  purposes: string[];
  priorities: string[];
  avoidConditions: string[];
  freeNote: string;
};

export type RecommendedCourse = {
  course: Course;
  score: number;
  matchedReasons: string[];
  matchedCautions: string[];
};

const INTEREST_TAG_MAP: Record<string, string[]> = {
  数学: ["数学", "代数学", "解析学", "集合論", "整数論", "証明", "抽象数学"],
  物理: ["物理", "電磁気学", "量子力学", "マクスウェル方程式", "波動関数", "電磁波"],
  プログラミング: ["プログラミング", "Fortran", "Linux", "JupyterHub", "計算物理"],
  計算物理: ["計算物理", "数値計算", "プログラミング", "Fortran"],
  量子力学: ["量子力学", "シュレーディンガー方程式", "波動関数"],
  電磁気学: ["電磁気学", "マクスウェル方程式", "電磁波", "ベクトル解析"],
  代数学: ["代数学", "整数論", "合同式"],
  解析学: ["解析学", "微分方程式", "応用数学"],
  数値計算: ["数値計算", "計算物理", "プログラミング"],
  抽象数学: ["集合論", "位相", "証明", "抽象数学", "論理", "写像"],
};

const PURPOSE_KEYWORD_MAP: Record<string, string[]> = {
  専門基礎を固めたい: ["専門基礎", "基礎力がつく", "物理系の基礎", "数学の基礎"],
  物理を深く学びたい: ["物理", "電磁気学", "量子力学", "理論物理"],
  数学の基礎を固めたい: ["数学", "代数学", "整数論", "集合", "証明"],
  "プログラミング・計算系に強くなりたい": ["プログラミング", "計算物理", "数値計算", "Fortran"],
  将来の研究や開発に役立てたい: ["応用", "研究", "計算", "シミュレーション", "理論"],
  必修科目を優先したい: ["必修"],
  演習で実力をつけたい: ["演習", "問題演習", "発表"],
};

const PRIORITY_MATCH_MAP: Record<string, (course: Course) => boolean> = {
  必修: (c) => c.requiredElective === "必修",
  "演習がある": (c) => c.classFormat === "演習科目" || c.tags.includes("演習"),
  "プログラミングに関係する": (c) =>
    c.tags.some((t) => ["プログラミング", "Fortran", "計算物理", "JupyterHub"].includes(t)),
  "物理に関係する": (c) =>
    c.tags.some((t) => ["物理", "電磁気学", "量子力学"].includes(t)),
  "数学に関係する": (c) =>
    c.tags.some((t) => ["数学", "代数学", "解析学", "集合論"].includes(t)),
  レポート中心: (c) => c.evaluation.includes("レポート"),
  試験中心: (c) => c.evaluation.includes("テスト") || c.evaluation.includes("試験"),
  "基礎力がつく": (c) => c.tags.includes("専門基礎") || c.tags.includes("必修"),
  "応用につながる": (c) =>
    c.tags.some((t) => ["応用数学", "計算物理", "物理モデル"].includes(t)),
};

const AVOID_MATCH_MAP: Record<string, (course: Course) => boolean> = {
  "課題が重い": (c) =>
    c.evaluation.includes("100%") &&
    (c.evaluation.includes("課題") || c.evaluation.includes("レポート")),
  "試験比重が高い": (c) =>
    c.evaluation.includes("50%") ||
    (c.evaluation.includes("40%") && c.evaluation.includes("試験")),
  "発表がある": (c) =>
    c.tags.includes("発表あり") || c.evaluation.includes("発表"),
  "毎回小テストがある": (c) =>
    c.tags.includes("毎回小テスト") || c.evaluation.includes("毎回"),
  "前提知識が多い": (c) =>
    c.tags.some((t) => ["数学前提", "微積分前提", "線形代数前提"].includes(t)) ||
    (c.prerequisites !== "特になし" && c.prerequisites.length > 10),
  連続コマ: (c) => c.dayPeriod.includes("・"),
  "4単位科目": (c) => c.credits === 4,
};

export function computeRecommendations(
  courses: Course[],
  input: UserInput
): RecommendedCourse[] {
  const results: RecommendedCourse[] = [];

  for (const course of courses) {
    let score = 0;
    const matchedReasons: string[] = [];
    const matchedCautions: string[] = [];

    for (const interest of input.interests) {
      const interestTags = INTEREST_TAG_MAP[interest] ?? [interest];
      const matched = interestTags.filter((tag) => course.tags.includes(tag));
      if (matched.length > 0) {
        score += matched.length * 2;
        matchedReasons.push(`興味分野「${interest}」に関連 (${matched.join(", ")})`);
      }
    }

    for (const purpose of input.purposes) {
      const keywords = PURPOSE_KEYWORD_MAP[purpose] ?? [purpose];
      const matchedInRecommended = keywords.filter((kw) =>
        course.recommendedFor.some((r) => r.includes(kw))
      );
      const matchedInTags = keywords.filter((kw) => course.tags.includes(kw));
      if (matchedInRecommended.length > 0 || matchedInTags.length > 0) {
        score += (matchedInRecommended.length + matchedInTags.length) * 2;
        matchedReasons.push(`履修目的「${purpose}」と合致`);
      }
    }

    for (const priority of input.priorities) {
      const matcher = PRIORITY_MATCH_MAP[priority];
      if (matcher && matcher(course)) {
        score += 3;
        matchedReasons.push(`重視条件「${priority}」を満たしている`);
      }
    }

    for (const avoid of input.avoidConditions) {
      const matcher = AVOID_MATCH_MAP[avoid];
      if (matcher && matcher(course)) {
        score -= 2;
        matchedCautions.push(`避けたい条件「${avoid}」に該当する可能性あり`);
      }
    }

    results.push({ course, score, matchedReasons, matchedCautions });
  }

  results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.matchedReasons.length - a.matchedReasons.length;
  });

  const positiveCount = results.filter((r) => r.score > 0).length;
  const count = Math.min(5, Math.max(3, positiveCount));
  return results.slice(0, count);
}

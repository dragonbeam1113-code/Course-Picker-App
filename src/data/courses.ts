export type Course = {
  id: string;
  title: string;
  titleEn: string;
  courseCode: string;
  faculty: string;
  year: string;
  semester: string;
  dayPeriod: string;
  credits: number;
  instructor: string;
  courseGroup: string;
  requiredElective: string;
  classFormat: string;
  level: string;
  summary: string;
  goals: string[];
  evaluation: string;
  preparationReview: string;
  prerequisites: string;
  tags: string[];
  recommendedFor: string[];
  cautions: string[];
  checkPoints: string[];
  sourceFile: string;
};

export const courses: Course[] = [
  {
    id: "electromagnetism-ii",
    title: "電磁気学II",
    titleEn: "Electromagnetism II",
    courseCode: "7261000022",
    faculty: "理工学部",
    year: "2,3,4",
    semester: "前期",
    dayPeriod: "月曜2限",
    credits: 2,
    instructor: "手塚 泰久",
    courseGroup: "専門教育科目 専門基礎科目",
    requiredElective: "必修",
    classFormat: "講義科目",
    level: "レベル2",
    summary:
      "電磁気学Iに続き、時間的に変動する電場・磁場の方程式を学ぶ。マクスウェル方程式や電磁波、物質中の電場・磁場を扱う。",
    goals: [
      "時間に依存する真空中のマクスウェル方程式の意味を理解する",
      "電磁気学の法則を用いて簡単な問題を解けるようにする"
    ],
    evaluation:
      "平常評価（ミニレポート・小テストなど）30%、期末レポート70%",
    preparationReview:
      "教科書の該当部分を予習し、授業ノートを教科書を参考にしながら復習する。",
    prerequisites: "特になし",
    tags: [
      "物理",
      "電磁気学",
      "マクスウェル方程式",
      "電磁波",
      "専門基礎",
      "必修",
      "レポート重視"
    ],
    recommendedFor: [
      "物理系の基礎を固めたい学生",
      "電磁気学Iの続きとして電磁波やマクスウェル方程式を学びたい学生",
      "物理・応用物理・理論系に関心がある学生"
    ],
    cautions: [
      "期末レポートの比重が大きい",
      "電磁気学Iの内容を前提にすると考えられる",
      "数式を使った理解が必要になりやすい"
    ],
    checkPoints: [
      "電磁気学Iの内容をどの程度復習しておくべきか",
      "期末レポートの形式・分量",
      "小テストやミニレポートの頻度"
    ],
    sourceFile: "Syllabus-7261000022-電磁気学II／和文.pdf"
  },
  {
    id: "algebra-i",
    title: "代数学I",
    titleEn: "Algebra I",
    courseCode: "7261000007",
    faculty: "理工学部",
    year: "2,3,4",
    semester: "前期",
    dayPeriod: "月曜4限",
    credits: 2,
    instructor: "川﨑 菜穂",
    courseGroup: "専門教育科目",
    requiredElective: "未記載",
    classFormat: "講義科目",
    level: "レベル2",
    summary:
      "初等整数論を題材に、有理整数の性質を深く学ぶ。群論・環論・体論への入門的役割を持つ。",
    goals: [
      "有理整数に関する基本的性質を理解する",
      "合同式の解法を身につける"
    ],
    evaluation:
      "レポート20%、中間テスト50%、期末テスト30%",
    preparationReview:
      "各回の内容について教科書の該当箇所を予習し、授業後に復習する。予習・復習は最低各2時間程度。",
    prerequisites: "特になし",
    tags: [
      "数学",
      "代数学",
      "整数論",
      "合同式",
      "証明",
      "中間試験あり",
      "試験重視"
    ],
    recommendedFor: [
      "数学の抽象的な基礎を学びたい学生",
      "整数論や代数学に関心がある学生",
      "証明や論理的思考を鍛えたい学生"
    ],
    cautions: [
      "中間テストの比重が大きい",
      "証明・計算・考察では自分の思考過程が求められる",
      "予習・復習の負担を見込む必要がある"
    ],
    checkPoints: [
      "中間テストと期末テストの範囲",
      "レポートの頻度",
      "代数学演習Iとの同時履修の必要性"
    ],
    sourceFile: "Syllabus-7261000007-代数学I／和文.pdf"
  },
  {
    id: "quantum-mechanics-i",
    title: "量子力学I",
    titleEn: "Quantum Mechanics I",
    courseCode: "7261000026",
    faculty: "理工学部",
    year: "2,3,4",
    semester: "前期",
    dayPeriod: "火曜4限",
    credits: 2,
    instructor: "浅田 秀樹",
    courseGroup: "専門教育科目 専門基礎科目",
    requiredElective: "必修",
    classFormat: "講義科目",
    level: "レベル2〜3",
    summary:
      "ミクロな世界を理解するための量子力学の入門。シュレーディンガー方程式、波動関数、トンネル効果、調和振動子などを扱う。",
    goals: [
      "量子力学における新しい概念を理解する",
      "シュレーディンガー方程式の理解と解法を身につける",
      "波動関数の物理的意味と物理量の計算方法を学ぶ"
    ],
    evaluation:
      "毎回のクイズ・小テストの合計100%",
    preparationReview:
      "Moodleから授業ノートPDFをダウンロードし、予習する。授業ノートを復習して毎回のクイズに回答する。予習・復習合計60時間。",
    prerequisites:
      "量子力学演習Iも併せて履修することが望ましい。理工系の数学AおよびBの履修を前提とする。",
    tags: [
      "物理",
      "量子力学",
      "シュレーディンガー方程式",
      "波動関数",
      "数学前提",
      "必修",
      "毎回小テスト"
    ],
    recommendedFor: [
      "現代物理・理論物理に関心がある学生",
      "量子力学の基礎を本格的に学びたい学生",
      "数式を使って物理を理解したい学生"
    ],
    cautions: [
      "レベルが2〜3で、他科目より難しめの可能性がある",
      "毎回の小テストが評価100%",
      "数学A・Bの前提知識が必要",
      "量子力学演習Iとの併修が望ましい"
    ],
    checkPoints: [
      "小テストの形式",
      "量子力学演習Iとの関係",
      "必要な数学の復習範囲",
      "Moodle資料の扱い"
    ],
    sourceFile: "Syllabus-7261000026-量子力学I／和文.pdf"
  },
  {
    id: "exercise-in-algebra-i",
    title: "代数学演習I",
    titleEn: "Exercise in Algebra I",
    courseCode: "7261000008",
    faculty: "理工学部",
    year: "2,3,4",
    semester: "前期",
    dayPeriod: "月曜5限",
    credits: 2,
    instructor: "川﨑 菜穂",
    courseGroup: "専門教育科目",
    requiredElective: "未記載",
    classFormat: "講義科目",
    level: "レベル2",
    summary:
      "代数学Iの内容に沿った演習問題を通じて、初等整数論の基礎を学ぶ。板書発表を通じ、数学的に正確な記号の使い方や証明の述べ方を身につける。",
    goals: [
      "演習を通して有理整数の基本的性質を理解する",
      "具体的な合同式の解を決定できるようにする"
    ],
    evaluation:
      "授業内課題60%、発表40%",
    preparationReview:
      "発表内容は事前によく推敲して準備する。小テストおよび演習問題の解法を復習する。",
    prerequisites: "代数学Iの講義内容に沿って進められる。",
    tags: [
      "数学",
      "代数学",
      "整数論",
      "演習",
      "発表あり",
      "証明",
      "代数学I関連"
    ],
    recommendedFor: [
      "代数学Iの理解を演習で深めたい学生",
      "証明の書き方・発表力を鍛えたい学生",
      "数学の問題演習を重視したい学生"
    ],
    cautions: [
      "発表評価が40%ある",
      "代数学Iの内容と連動している",
      "演習問題への継続的な取り組みが必要"
    ],
    checkPoints: [
      "発表の頻度",
      "代数学Iとの同時履修の必要性",
      "授業内課題の形式"
    ],
    sourceFile: "Syllabus-7261000008-代数学演習I／和文.pdf"
  },
  {
    id: "differential-equations",
    title: "微分方程式",
    titleEn: "Differential Equations",
    courseCode: "7261000005",
    faculty: "理工学部",
    year: "2,3,4",
    semester: "前期",
    dayPeriod: "水曜3限",
    credits: 2,
    instructor: "津田谷 公利",
    courseGroup: "専門教育科目",
    requiredElective: "未記載",
    classFormat: "講義科目",
    level: "レベル2",
    summary:
      "自然現象や社会現象を記述する数学モデルとして現れる初等的な微分方程式とその解法を学ぶ。",
    goals: [
      "基本的な微分方程式の解法を理解する",
      "基本的な微分方程式の解法を習得する"
    ],
    evaluation:
      "小テスト・レポート・演習30%、中間試験30%、期末試験40%",
    preparationReview:
      "教科書の該当箇所を予習し、授業後に復習する。予習・復習は最低各2時間程度。練習問題やレポート問題にも取り組む。",
    prerequisites:
      "微分積分学および線形代数学の内容を理解していること。特に1変数の微分積分の計算が不自由なくできることが必須。",
    tags: [
      "数学",
      "解析学",
      "応用数学",
      "微分方程式",
      "物理モデル",
      "微積分前提",
      "線形代数前提"
    ],
    recommendedFor: [
      "物理や数理モデルに関心がある学生",
      "微分積分・線形代数を応用したい学生",
      "応用数学や計算系に進みたい学生"
    ],
    cautions: [
      "微分積分と線形代数の前提知識が必要",
      "中間試験・期末試験・平常評価が分散している",
      "復習量が重要になりやすい"
    ],
    checkPoints: [
      "1変数微積分をどの程度復習すべきか",
      "中間試験と期末試験の範囲",
      "レポート・演習の頻度"
    ],
    sourceFile: "Syllabus-7261000005-微分方程式／和文.pdf"
  },
  {
    id: "exercise-on-electromagnetism",
    title: "電磁気学演習",
    titleEn: "Exercise on Electromagnetism",
    courseCode: "7261000023",
    faculty: "理工学部",
    year: "2,3,4",
    semester: "前期",
    dayPeriod: "木曜5限",
    credits: 2,
    instructor: "久我 健太郎",
    courseGroup: "専門教育科目 専門基礎科目",
    requiredElective: "必修",
    classFormat: "演習科目",
    level: "レベル2",
    summary:
      "電磁気学の演習問題を解くことで、電磁気学の理解と応用力を高める。電場・磁場を具体的に求める演習やベクトル計算を扱う。",
    goals: [
      "電磁気学の理解を深める",
      "電磁気学の応用力を高める"
    ],
    evaluation:
      "二週ごとのレポート100%",
    preparationReview:
      "出題予定内容を予習し、解けなかった問題は独力で解けるようになるまで復習する。",
    prerequisites: "特になし",
    tags: [
      "物理",
      "電磁気学",
      "演習",
      "ベクトル解析",
      "必修",
      "レポート100%",
      "生成AI不可"
    ],
    recommendedFor: [
      "電磁気学を問題演習で身につけたい学生",
      "電場・磁場の具体的計算に慣れたい学生",
      "電磁気学IIと関連して理解を深めたい学生"
    ],
    cautions: [
      "評価は二週ごとのレポート100%",
      "生成AIは利用不可",
      "解けなかった問題を自力で解き直す復習が必要"
    ],
    checkPoints: [
      "レポート提出頻度と分量",
      "電磁気学IIとの関係",
      "生成AI利用不可の範囲"
    ],
    sourceFile: "Syllabus-7261000023-電磁気学演習／和文.pdf"
  },
  {
    id: "set-theory-i",
    title: "集合・位相I",
    titleEn: "Set Theory",
    courseCode: "7261000006",
    faculty: "理工学部",
    year: "2,3,4",
    semester: "前期",
    dayPeriod: "金曜2限",
    credits: 2,
    instructor: "江居 宏美",
    courseGroup: "専門教育科目",
    requiredElective: "未記載",
    classFormat: "講義科目",
    level: "レベル2",
    summary:
      "数学の議論に必須となる集合と写像の概念、基本的性質を学ぶ。命題、推論、集合演算、写像、二項関係、選択公理などを扱う。",
    goals: [
      "集合や写像に関する定義・記号・基本的性質を理解する",
      "集合や写像を用いた抽象的議論や具体例の計算ができるようにする"
    ],
    evaluation:
      "授業への参加度20%、中間テスト40%、期末テスト40%",
    preparationReview:
      "予習は毎回指示される。復習ではノート理解、演習問題、分からない点の解決が求められる。予習・復習は最低各2時間程度。",
    prerequisites: "特になし",
    tags: [
      "数学",
      "集合論",
      "位相",
      "写像",
      "論理",
      "抽象数学",
      "中間試験あり"
    ],
    recommendedFor: [
      "数学の基礎言語を身につけたい学生",
      "抽象的な数学に慣れたい学生",
      "代数学・解析学・位相に進む基礎を作りたい学生"
    ],
    cautions: [
      "抽象的な定義や記号に慣れる必要がある",
      "中間テストと期末テストの比重が大きい",
      "授業妨害行為は減点対象と明記されている"
    ],
    checkPoints: [
      "予習指示の出され方",
      "演習問題の量",
      "中間テスト・期末テストの範囲"
    ],
    sourceFile: "Syllabus-7261000006-集合・位相I／和文.pdf"
  },
  {
    id: "exercise-on-computational-physics",
    title: "計算機演習",
    titleEn: "Exercise on Computational Physics",
    courseCode: "7261000028",
    faculty: "理工学部",
    year: "2,3,4",
    semester: "前期",
    dayPeriod: "金曜3限・4限",
    credits: 4,
    instructor: "野村 真理子",
    courseGroup: "専門教育科目 専門基礎科目",
    requiredElective: "必修",
    classFormat: "演習科目",
    level: "レベル2",
    summary:
      "計算物理学への入門基礎コース。Fortran、Linux、数値計算法、可視化、モンテカルロ法などを扱い、物理現象を計算プログラムに反映する力を養う。",
    goals: [
      "基礎的な物理現象を計算プログラムに反映する見通しを得る",
      "プログラムを自ら作成・実行できるようにする",
      "計算結果について考察できるようにする"
    ],
    evaluation:
      "毎回出題する課題100%。3分の2を超える出席および全課題の適切な提出が最低必要条件。",
    preparationReview:
      "Teams上で配布されるPDF資料を読み、基礎項目を復習して準備する。毎回の課題に取り組む。",
    prerequisites:
      "データサイエンス基礎程度のレベルを既に習得していること。JupyterHub、実習室PCの基本操作、ID・パスワード確認が必要。",
    tags: [
      "計算物理",
      "プログラミング",
      "Fortran",
      "Linux",
      "数値計算",
      "JupyterHub",
      "演習",
      "課題100%",
      "4単位"
    ],
    recommendedFor: [
      "AI駆動型開発や数値計算に関心がある学生",
      "物理をプログラムで扱いたい学生",
      "計算・可視化・シミュレーションに興味がある学生"
    ],
    cautions: [
      "4単位で金曜3・4限の連続科目",
      "毎回課題100%で継続的な作業が必要",
      "JupyterHubや実習環境の準備が必要",
      "演習課題を生成AIに直接解かせることは禁止"
    ],
    checkPoints: [
      "FortranやLinuxの事前知識がどの程度必要か",
      "毎回課題の重さ",
      "JupyterHubに事前ログインできるか",
      "欠席時の補完方法"
    ],
    sourceFile: "Syllabus-7261000028-計算機演習／和文.pdf"
  }
];
import { RecommendedCourse } from "@/lib/recommend";

type Props = {
  result: RecommendedCourse;
  rank: number;
};

export default function CourseCard({ result, rank }: Props) {
  const { course, score, matchedReasons, matchedCautions } = result;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
              #{rank}
            </span>
            <h3 className="font-bold text-gray-900 text-lg">{course.title}</h3>
          </div>
          <p className="text-gray-500 text-sm">{course.titleEn}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-2xl font-bold text-blue-600">{score}</div>
          <div className="text-xs text-gray-500">スコア</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-3 text-sm text-gray-600">
        <span className="bg-gray-100 px-2 py-0.5 rounded">{course.dayPeriod}</span>
        <span className="bg-gray-100 px-2 py-0.5 rounded">{course.credits}単位</span>
        <span className="bg-gray-100 px-2 py-0.5 rounded">{course.instructor}</span>
        {course.requiredElective === "必修" && (
          <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded font-semibold">必修</span>
        )}
        <span className="bg-gray-100 px-2 py-0.5 rounded">{course.classFormat}</span>
      </div>

      <p className="text-sm text-gray-700 mb-4 leading-relaxed">{course.summary}</p>

      {matchedReasons.length > 0 && (
        <div className="mb-3">
          <p className="text-xs font-semibold text-green-700 mb-1">おすすめ理由</p>
          <ul className="space-y-0.5">
            {matchedReasons.map((r, i) => (
              <li key={i} className="text-sm text-green-800 flex gap-1.5">
                <span className="text-green-500 shrink-0">✓</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {(matchedCautions.length > 0 || course.cautions.length > 0) && (
        <div className="mb-3">
          <p className="text-xs font-semibold text-orange-700 mb-1">注意点</p>
          <ul className="space-y-0.5">
            {matchedCautions.map((c, i) => (
              <li key={`avoid-${i}`} className="text-sm text-orange-800 flex gap-1.5">
                <span className="text-orange-500 shrink-0">!</span>
                <span>{c}</span>
              </li>
            ))}
            {course.cautions.map((c, i) => (
              <li key={`caution-${i}`} className="text-sm text-orange-800 flex gap-1.5">
                <span className="text-orange-400 shrink-0">·</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {course.checkPoints.length > 0 && (
        <div className="mb-3">
          <p className="text-xs font-semibold text-blue-700 mb-1">公式シラバスで確認すべき事項</p>
          <ul className="space-y-0.5">
            {course.checkPoints.map((cp, i) => (
              <li key={i} className="text-sm text-blue-800 flex gap-1.5">
                <span className="text-blue-400 shrink-0">→</span>
                <span>{cp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 mt-3">
        {course.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full border border-blue-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

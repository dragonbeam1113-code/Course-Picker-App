import { RecommendedCourse } from "@/lib/recommend";

type Props = {
  results: RecommendedCourse[];
};

const FIELD_TAGS = ["数学", "物理", "計算物理", "プログラミング", "解析学", "代数学", "集合論", "電磁気学", "量子力学"];

function getFieldTags(tags: string[]): string {
  const matched = tags.filter((t) => FIELD_TAGS.includes(t)).join(", ");
  return matched || (tags[0] ?? "-");
}

export default function ComparisonTable({ results }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-bold text-gray-800">おすすめ授業 比較表</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-left">
              <th className="px-4 py-3 font-semibold whitespace-nowrap">授業名</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">分野</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">曜日・時限</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">単位</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">評価方法</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">向いている学生</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">注意点</th>
            </tr>
          </thead>
          <tbody>
            {results.map(({ course }, i) => (
              <tr
                key={course.id}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                  {course.title}
                </td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                  {getFieldTags(course.tags)}
                </td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                  {course.dayPeriod}
                </td>
                <td className="px-4 py-3 text-gray-700 text-center">
                  {course.credits}
                </td>
                <td className="px-4 py-3 text-gray-700 min-w-[180px]">
                  {course.evaluation}
                </td>
                <td className="px-4 py-3 text-gray-700 min-w-[200px]">
                  {course.recommendedFor[0] ?? "-"}
                </td>
                <td className="px-4 py-3 text-orange-700 min-w-[200px]">
                  {course.cautions[0] ?? "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

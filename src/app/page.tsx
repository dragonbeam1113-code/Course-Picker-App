"use client";

import { useState } from "react";
import { courses } from "@/data/courses";
import { computeRecommendations, UserInput, RecommendedCourse } from "@/lib/recommend";
import ConditionForm from "@/components/ConditionForm";
import CourseCard from "@/components/CourseCard";
import ComparisonTable from "@/components/ComparisonTable";
import Disclaimer from "@/components/Disclaimer";

const DEFAULT_INPUT: UserInput = {
  year: "",
  interests: [],
  purposes: [],
  priorities: [],
  avoidConditions: [],
  freeNote: "",
};

export default function Home() {
  const [input, setInput] = useState<UserInput>(DEFAULT_INPUT);
  const [results, setResults] = useState<RecommendedCourse[] | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const recs = computeRecommendations(courses, input);
    setResults(recs);
    setSubmitted(true);
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">履修候補ピッカー</h1>
          <p className="text-gray-500 text-sm">弘前大学理工学部 · 非公式プロトタイプ</p>
        </div>

        {/* App description */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-5 text-sm text-blue-900">
          <p className="font-semibold mb-1">このアプリについて</p>
          <p>
            あなたの目的・興味・条件を入力すると、サンプル授業データからおすすめ候補を3〜5件提示します。
            大量のシラバスを読む前に、最初の絞り込みに使ってください。
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mb-6">
          <Disclaimer />
        </div>

        {/* Form */}
        <div className="mb-8">
          <ConditionForm input={input} onChange={setInput} onSubmit={handleSubmit} />
        </div>

        {/* Results */}
        {submitted && results && (
          <div id="results">
            {results.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                条件に合う授業が見つかりませんでした。条件を変えて再度お試しください。
              </div>
            ) : (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-800">
                    おすすめ授業 ({results.length}件)
                  </h2>
                  {input.freeNote && (
                    <div className="text-xs text-gray-500 max-w-xs text-right">
                      メモ: {input.freeNote}
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {results.map((r, i) => (
                    <CourseCard key={r.course.id} result={r} rank={i + 1} />
                  ))}
                </div>

                <div className="mb-8">
                  <ComparisonTable results={results} />
                </div>

                <div className="bg-gray-100 rounded-xl p-4 text-sm text-gray-600 text-center">
                  <p className="font-semibold mb-1">履修登録前に公式情報を必ず確認してください</p>
                  <p>シラバス・履修要項・教務ポータルで最新情報を確認してから履修登録を行ってください。</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

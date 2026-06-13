"use client";

import { UserInput } from "@/lib/recommend";

type Props = {
  input: UserInput;
  onChange: (input: UserInput) => void;
  onSubmit: () => void;
};

const YEARS = ["1年", "2年", "3年", "4年"];

const INTERESTS = [
  "数学", "物理", "プログラミング", "計算物理",
  "量子力学", "電磁気学", "代数学", "解析学", "数値計算", "抽象数学",
];

const PURPOSES = [
  "専門基礎を固めたい",
  "物理を深く学びたい",
  "数学の基礎を固めたい",
  "プログラミング・計算系に強くなりたい",
  "将来の研究や開発に役立てたい",
  "必修科目を優先したい",
  "演習で実力をつけたい",
];

const PRIORITIES = [
  "必修",
  "演習がある",
  "プログラミングに関係する",
  "物理に関係する",
  "数学に関係する",
  "レポート中心",
  "試験中心",
  "基礎力がつく",
  "応用につながる",
];

const AVOID_CONDITIONS = [
  "課題が重い",
  "試験比重が高い",
  "発表がある",
  "毎回小テストがある",
  "前提知識が多い",
  "連続コマ",
  "4単位科目",
];

function CheckboxGroup({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  const toggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className="mb-5">
      <p className="font-semibold text-gray-700 mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const checked = selected.includes(opt);
          return (
            <label
              key={opt}
              className={`cursor-pointer px-3 py-1.5 rounded-full border text-sm transition-colors ${
                checked
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:border-blue-400"
              }`}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={checked}
                onChange={() => toggle(opt)}
              />
              {opt}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default function ConditionForm({ input, onChange, onSubmit }: Props) {
  const set = <K extends keyof UserInput>(key: K, value: UserInput[K]) =>
    onChange({ ...input, [key]: value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <h2 className="text-lg font-bold text-gray-800 mb-5">条件を入力する</h2>

      <div className="mb-5">
        <label className="font-semibold text-gray-700 block mb-2">学年</label>
        <div className="flex gap-2 flex-wrap">
          {YEARS.map((y) => (
            <label
              key={y}
              className={`cursor-pointer px-4 py-1.5 rounded-full border text-sm transition-colors ${
                input.year === y
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:border-blue-400"
              }`}
            >
              <input
                type="radio"
                className="sr-only"
                name="year"
                value={y}
                checked={input.year === y}
                onChange={() => set("year", y)}
              />
              {y}
            </label>
          ))}
        </div>
      </div>

      <CheckboxGroup
        label="興味のある分野（複数選択可）"
        options={INTERESTS}
        selected={input.interests}
        onChange={(v) => set("interests", v)}
      />

      <CheckboxGroup
        label="履修目的（複数選択可）"
        options={PURPOSES}
        selected={input.purposes}
        onChange={(v) => set("purposes", v)}
      />

      <CheckboxGroup
        label="重視する条件（複数選択可）"
        options={PRIORITIES}
        selected={input.priorities}
        onChange={(v) => set("priorities", v)}
      />

      <CheckboxGroup
        label="避けたい条件（複数選択可）"
        options={AVOID_CONDITIONS}
        selected={input.avoidConditions}
        onChange={(v) => set("avoidConditions", v)}
      />

      <div className="mb-6">
        <label className="font-semibold text-gray-700 block mb-2">
          自由記述メモ（表示のみ・推薦には反映されません）
        </label>
        <textarea
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={3}
          placeholder="例：月曜・火曜に空きコマを作りたい、など"
          value={input.freeNote}
          onChange={(e) => set("freeNote", e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors text-base"
      >
        候補を探す
      </button>
    </form>
  );
}

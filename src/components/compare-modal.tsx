"use client";

import { UniversityRow } from "../lib/get-universities";

type Props = {
  a: UniversityRow;
  b: UniversityRow;
  onClose: () => void;
};

export default function CompareModal({ a, b, onClose }: Props) {
  const compareValue = (aVal: number, bVal: number, lowerIsBetter = false) => {
    if (lowerIsBetter) {
      if (aVal < bVal) return { a: "better", b: "worse" };
      if (aVal > bVal) return { a: "worse", b: "better" };
    } else {
      if (aVal > bVal) return { a: "better", b: "worse" };
      if (aVal < bVal) return { a: "worse", b: "better" };
    }
    return { a: "equal", b: "equal" };
  };

  const tuitionCompare = compareValue(a.tuition_fee, b.tuition_fee, true);
  const rankingCompare = compareValue(a.ranking, b.ranking, true);

  const getValueClass = (status: string) => {
    if (status === "better") return "text-stone-800 font-semibold";
    if (status === "worse") return "text-stone-400";
    return "text-stone-700";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white border-2 border-stone-800 max-w-6xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="border-b-2 border-stone-800 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-3xl font-light text-stone-800 mb-2">
                Institutional Comparison
              </h2>
              <p className="text-sm text-stone-600 font-light">
                Side-by-side analysis
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 border border-stone-300 hover:border-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-2 gap-8">
            {/* University A */}
            <div className="space-y-6">
              <div className="pb-6 border-b border-stone-200">
                <h3 className="font-serif text-2xl text-stone-800 mb-3">
                  {a.name}
                </h3>
                <p className="text-stone-600">
                  {a.city}, {a.country}
                </p>
              </div>

              <div className="space-y-4">
                <div className="pb-4 border-b border-stone-100">
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-2">
                    Annual Tuition
                  </div>
                  <div
                    className={`font-serif text-3xl ${getValueClass(tuitionCompare.a)}`}
                  >
                    ${a.tuition_fee.toLocaleString()}
                  </div>
                </div>

                <div className="pb-4 border-b border-stone-100">
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-2">
                    Global Ranking
                  </div>
                  <div
                    className={`font-serif text-3xl ${getValueClass(rankingCompare.a)}`}
                  >
                    #{a.ranking}
                  </div>
                </div>

                <div className="pb-4 border-b border-stone-100">
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-2">
                    Established
                  </div>
                  <div className="font-serif text-3xl text-stone-800">
                    {a.established_year}
                  </div>
                </div>

                <div className="pb-4 border-b border-stone-100">
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-3">
                    Benefits
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div
                        className={`w-2 h-2 ${a.scholarship_available ? "bg-stone-800" : "bg-stone-300"}`}
                      ></div>
                      <span
                        className={
                          a.scholarship_available
                            ? "text-stone-800"
                            : "text-stone-400"
                        }
                      >
                        Scholarships{" "}
                        {a.scholarship_available ? "Available" : "Limited"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div
                        className={`w-2 h-2 ${!a.ielts_required ? "bg-stone-800" : "bg-stone-300"}`}
                      ></div>
                      <span
                        className={
                          !a.ielts_required
                            ? "text-stone-800"
                            : "text-stone-400"
                        }
                      >
                        IELTS {a.ielts_required ? "Required" : "Not Required"}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-2">
                    Intake Months
                  </div>
                  <div className="text-sm text-stone-700">
                    {a.intake_months}
                  </div>
                </div>
              </div>
            </div>

            {/* University B */}
            <div className="space-y-6">
              <div className="pb-6 border-b border-stone-200">
                <h3 className="font-serif text-2xl text-stone-800 mb-3">
                  {b.name}
                </h3>
                <p className="text-stone-600">
                  {b.city}, {b.country}
                </p>
              </div>

              <div className="space-y-4">
                <div className="pb-4 border-b border-stone-100">
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-2">
                    Annual Tuition
                  </div>
                  <div
                    className={`font-serif text-3xl ${getValueClass(tuitionCompare.b)}`}
                  >
                    ${b.tuition_fee.toLocaleString()}
                  </div>
                </div>

                <div className="pb-4 border-b border-stone-100">
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-2">
                    Global Ranking
                  </div>
                  <div
                    className={`font-serif text-3xl ${getValueClass(rankingCompare.b)}`}
                  >
                    #{b.ranking}
                  </div>
                </div>

                <div className="pb-4 border-b border-stone-100">
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-2">
                    Established
                  </div>
                  <div className="font-serif text-3xl text-stone-800">
                    {b.established_year}
                  </div>
                </div>

                <div className="pb-4 border-b border-stone-100">
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-3">
                    Benefits
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div
                        className={`w-2 h-2 ${b.scholarship_available ? "bg-stone-800" : "bg-stone-300"}`}
                      ></div>
                      <span
                        className={
                          b.scholarship_available
                            ? "text-stone-800"
                            : "text-stone-400"
                        }
                      >
                        Scholarships{" "}
                        {b.scholarship_available ? "Available" : "Limited"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div
                        className={`w-2 h-2 ${!b.ielts_required ? "bg-stone-800" : "bg-stone-300"}`}
                      ></div>
                      <span
                        className={
                          !b.ielts_required
                            ? "text-stone-800"
                            : "text-stone-400"
                        }
                      >
                        IELTS {b.ielts_required ? "Required" : "Not Required"}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-2">
                    Intake Months
                  </div>
                  <div className="text-sm text-stone-700">
                    {b.intake_months}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

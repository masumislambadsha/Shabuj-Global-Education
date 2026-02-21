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
  const yearCompare = compareValue(a.established_year, b.established_year);

  const getValueClass = (status: string) => {
    if (status === "better") return "text-emerald-700 font-bold";
    if (status === "worse") return "text-gray-500";
    return "text-gray-700 font-semibold";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold">University Comparison</h2>
                <p className="text-indigo-100 text-sm">Side-by-side analysis</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all"
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
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            {/* University A */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {a.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    {a.city}, {a.country}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Annual Tuition
                  </div>
                  <div
                    className={`text-2xl ${getValueClass(tuitionCompare.a)}`}
                  >
                    ${a.tuition_fee.toLocaleString()}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Global Ranking
                  </div>
                  <div
                    className={`text-2xl ${getValueClass(rankingCompare.a)}`}
                  >
                    #{a.ranking}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Established
                  </div>
                  <div className={`text-2xl ${getValueClass(yearCompare.a)}`}>
                    {a.established_year}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    Benefits
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {a.scholarship_available ? (
                        <>
                          <svg
                            className="w-5 h-5 text-emerald-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium text-emerald-700">
                            Scholarships Available
                          </span>
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-500">
                            Limited Scholarships
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {a.ielts_required ? (
                        <>
                          <svg
                            className="w-5 h-5 text-amber-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium text-amber-700">
                            IELTS Required
                          </span>
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-5 h-5 text-emerald-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium text-emerald-700">
                            No IELTS Required
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    Intake Months
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    {a.intake_months}
                  </div>
                </div>
              </div>
            </div>

            {/* University B */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {b.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    {b.city}, {b.country}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Annual Tuition
                  </div>
                  <div
                    className={`text-2xl ${getValueClass(tuitionCompare.b)}`}
                  >
                    ${b.tuition_fee.toLocaleString()}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Global Ranking
                  </div>
                  <div
                    className={`text-2xl ${getValueClass(rankingCompare.b)}`}
                  >
                    #{b.ranking}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Established
                  </div>
                  <div className={`text-2xl ${getValueClass(yearCompare.b)}`}>
                    {b.established_year}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    Benefits
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {b.scholarship_available ? (
                        <>
                          <svg
                            className="w-5 h-5 text-emerald-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium text-emerald-700">
                            Scholarships Available
                          </span>
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-500">
                            Limited Scholarships
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {b.ielts_required ? (
                        <>
                          <svg
                            className="w-5 h-5 text-amber-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium text-amber-700">
                            IELTS Required
                          </span>
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-5 h-5 text-emerald-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium text-emerald-700">
                            No IELTS Required
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    Intake Months
                  </div>
                  <div className="text-sm font-medium text-gray-700">
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

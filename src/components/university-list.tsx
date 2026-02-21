"use client";

import { useState } from "react";
import { UniversityRow } from "../lib/get-universities";
import CompareModal from "./compare-modal";

type Props = {
  universities: UniversityRow[];
};

export default function UniversityList({ universities }: Props) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const toggleSelection = (id: number) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 2) return [prev[1], id];
      return [...prev, id];
    });
  };

  const selected = universities.filter((u) => selectedIds.includes(u.id));

  return (
    <section>
      <div className="flex items-center justify-between mb-6 bg-white rounded-xl p-4 shadow-md border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">
              {universities.length}{" "}
              {universities.length === 1 ? "University" : "Universities"} Found
            </p>
            <p className="text-xs text-gray-500">Select up to 2 to compare</p>
          </div>
        </div>
        <button
          type="button"
          disabled={selectedIds.length !== 2}
          onClick={() => setShowCompare(true)}
          className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all transform ${
            selectedIds.length === 2
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          <span className="flex items-center gap-2">
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Compare ({selectedIds.length}/2)
          </span>
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {universities.map((u) => {
          const isSelected = selectedIds.includes(u.id);
          return (
            <article
              key={u.id}
              className={`group relative border-2 rounded-2xl p-6 bg-white shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 ${
                isSelected
                  ? "border-indigo-500 ring-4 ring-indigo-100"
                  : "border-gray-100 hover:border-emerald-300"
              }`}
            >
              {/* Selection badge */}
              {isSelected && (
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}

              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {u.name}
                  </h2>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
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
                    {u.city}, {u.country}
                  </div>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleSelection(u.id)}
                    className="h-5 w-5 rounded border-2 border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-200"
                  />
                </label>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    Tuition
                  </span>
                  <span className="text-base font-bold text-emerald-700">
                    ${u.tuition_fee.toLocaleString()}/yr
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <div className="text-xs text-gray-600 mb-1">Ranking</div>
                    <div className="text-lg font-bold text-blue-700">
                      #{u.ranking}
                    </div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-xl">
                    <div className="text-xs text-gray-600 mb-1">Est.</div>
                    <div className="text-lg font-bold text-purple-700">
                      {u.established_year}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  {u.scholarship_available && (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-lg text-xs font-semibold">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Scholarship
                    </span>
                  )}
                  {u.ielts_required ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-xs font-semibold">
                      IELTS Required
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-xs font-semibold">
                      No IELTS
                    </span>
                  )}
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">Intakes</div>
                  <div className="text-sm font-medium text-gray-700">
                    {u.intake_months}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {universities.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            No universities found
          </h3>
          <p className="text-gray-600">
            Try adjusting your filters to see more results
          </p>
        </div>
      )}

      {showCompare && selected.length === 2 && (
        <CompareModal
          a={selected[0]}
          b={selected[1]}
          onClose={() => setShowCompare(false)}
        />
      )}
    </section>
  );
}

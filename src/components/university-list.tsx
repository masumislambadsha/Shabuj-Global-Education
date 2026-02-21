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
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
        <div>
          <p className="font-serif text-lg text-stone-800">
            {universities.length}{" "}
            {universities.length === 1 ? "Institution" : "Institutions"}
          </p>
          <p className="text-xs text-stone-500 mt-1">
            Select up to two for comparison
          </p>
        </div>
        <button
          type="button"
          disabled={selectedIds.length !== 2}
          onClick={() => setShowCompare(true)}
          className={`px-6 py-2.5 text-sm tracking-wide uppercase font-medium border-2 transition-all duration-300 ${
            selectedIds.length === 2
              ? "border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white"
              : "border-stone-300 text-stone-400 cursor-not-allowed"
          }`}
        >
          Compare ({selectedIds.length}/2)
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {universities.map((u) => {
          const isSelected = selectedIds.includes(u.id);
          return (
            <article
              key={u.id}
              className={`border bg-white p-6 transition-all duration-300 ${
                isSelected
                  ? "border-stone-800 shadow-lg"
                  : "border-stone-200 hover:border-stone-400 hover:shadow-md"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-stone-100">
                <div className="flex-1">
                  <h2 className="font-serif text-xl text-stone-800 mb-2">
                    {u.name}
                  </h2>
                  <p className="text-sm text-stone-600">
                    {u.city}, {u.country}
                  </p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleSelection(u.id)}
                    className="h-4 w-4 border-stone-400 text-stone-800 focus:ring-stone-500"
                  />
                </label>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-stone-500 uppercase tracking-wider">
                    Annual Tuition
                  </span>
                  <span className="font-serif text-lg text-stone-800">
                    ${u.tuition_fee.toLocaleString()}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-stone-500 uppercase tracking-wider mb-1">
                      Ranking
                    </div>
                    <div className="font-serif text-2xl text-stone-800">
                      #{u.ranking}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 uppercase tracking-wider mb-1">
                      Est.
                    </div>
                    <div className="font-serif text-2xl text-stone-800">
                      {u.established_year}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-600">Scholarships</span>
                    <span
                      className={
                        u.scholarship_available
                          ? "text-stone-800 font-medium"
                          : "text-stone-400"
                      }
                    >
                      {u.scholarship_available ? "Available" : "Limited"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-600">IELTS</span>
                    <span
                      className={
                        u.ielts_required
                          ? "text-stone-800 font-medium"
                          : "text-stone-400"
                      }
                    >
                      {u.ielts_required ? "Required" : "Not Required"}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-2">
                    Intakes
                  </div>
                  <div className="text-sm text-stone-700">
                    {u.intake_months}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {universities.length === 0 && (
        <div className="text-center py-20 border border-stone-200 bg-white">
          <svg
            className="w-12 h-12 text-stone-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="font-serif text-xl text-stone-800 mb-2">
            No Institutions Found
          </h3>
          <p className="text-stone-600 font-light">
            Please adjust your search criteria
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

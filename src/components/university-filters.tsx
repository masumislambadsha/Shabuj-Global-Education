"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { UniversityFilters } from "../lib/get-universities";

type Props = {
  initialValues: UniversityFilters;
};

const COUNTRIES = [
  "United Kingdom",
  "Canada",
  "Australia",
  "Ireland",
  "New Zealand",
];

export default function UniversityFiltersForm({ initialValues }: Props) {
  const searchParams = useSearchParams();

  const [country, setCountry] = useState(initialValues.country ?? "all");
  const [city, setCity] = useState(initialValues.city ?? "");
  const [minTuition, setMinTuition] = useState(initialValues.minTuition ?? "");
  const [maxTuition, setMaxTuition] = useState(initialValues.maxTuition ?? "");
  const [minRanking, setMinRanking] = useState(initialValues.minRanking ?? "");
  const [maxRanking, setMaxRanking] = useState(initialValues.maxRanking ?? "");
  const [establishedFrom, setEstablishedFrom] = useState(
    initialValues.establishedFrom ?? "",
  );
  const [establishedTo, setEstablishedTo] = useState(
    initialValues.establishedTo ?? "",
  );
  const [scholarship, setScholarship] = useState(
    initialValues.scholarship === "true",
  );
  const [ieltsRequired, setIeltsRequired] = useState(
    initialValues.ieltsRequired ?? "any",
  );
  const [intakeMonth, setIntakeMonth] = useState(
    initialValues.intakeMonth ?? "",
  );

  useEffect(() => {
    setCountry(initialValues.country ?? "all");
  }, [searchParams, initialValues.country]);

  return (
    <form
      method="GET"
      className="grid gap-4 md:grid-cols-4 bg-white shadow-xl rounded-2xl p-6 mb-8 border border-gray-100"
    >
      {/* Country */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
          Country
        </label>
        <select
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border-2 border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
        >
          <option value="all">All</option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* City */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
          City
        </label>
        <input
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border-2 border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
          placeholder="e.g. London"
        />
      </div>

      {/* Tuition */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
          Tuition (min / max)
        </label>
        <div className="flex gap-2">
          <input
            name="minTuition"
            value={minTuition}
            onChange={(e) => setMinTuition(e.target.value)}
            className="border-2 border-gray-200 rounded-lg px-3 py-2 text-sm w-1/2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
            placeholder="Min"
          />
          <input
            name="maxTuition"
            value={maxTuition}
            onChange={(e) => setMaxTuition(e.target.value)}
            className="border-2 border-gray-200 rounded-lg px-3 py-2 text-sm w-1/2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Ranking */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
          Ranking (best / worst)
        </label>
        <div className="flex gap-2">
          <input
            name="minRanking"
            value={minRanking}
            onChange={(e) => setMinRanking(e.target.value)}
            className="border-2 border-gray-200 rounded-lg px-3 py-2 text-sm w-1/2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
            placeholder="Best ≤"
          />
          <input
            name="maxRanking"
            value={maxRanking}
            onChange={(e) => setMaxRanking(e.target.value)}
            className="border-2 border-gray-200 rounded-lg px-3 py-2 text-sm w-1/2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
            placeholder="Worst ≥"
          />
        </div>
      </div>

      {/* Established */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
          Established year
        </label>
        <div className="flex gap-2">
          <input
            name="establishedFrom"
            value={establishedFrom}
            onChange={(e) => setEstablishedFrom(e.target.value)}
            className="border-2 border-gray-200 rounded-lg px-3 py-2 text-sm w-1/2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
            placeholder="From"
          />
          <input
            name="establishedTo"
            value={establishedTo}
            onChange={(e) => setEstablishedTo(e.target.value)}
            className="border-2 border-gray-200 rounded-lg px-3 py-2 text-sm w-1/2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
            placeholder="To"
          />
        </div>
      </div>

      {/* Scholarship */}
      <div className="flex items-center gap-3 pt-6">
        <input
          id="scholarship"
          type="checkbox"
          name="scholarship"
          value="true"
          checked={scholarship}
          onChange={(e) => setScholarship(e.target.checked)}
          className="h-5 w-5 rounded border-2 border-gray-300 text-emerald-600 focus:ring-2 focus:ring-emerald-200"
        />
        <label
          htmlFor="scholarship"
          className="text-sm font-medium text-gray-700 cursor-pointer"
        >
          Scholarships available
        </label>
      </div>

      {/* IELTS */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
          IELTS requirement
        </label>
        <select
          name="ieltsRequired"
          value={ieltsRequired}
          onChange={(e) => setIeltsRequired(e.target.value)}
          className="border-2 border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
        >
          <option value="any">Any</option>
          <option value="true">IELTS required</option>
          <option value="false">No IELTS</option>
        </select>
      </div>

      {/* Intake month */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
          Intake month
        </label>
        <select
          name="intakeMonth"
          value={intakeMonth}
          onChange={(e) => setIntakeMonth(e.target.value)}
          className="border-2 border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
        >
          <option value="">Any</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="May">May</option>
          <option value="July">July</option>
          <option value="September">September</option>
        </select>
      </div>

      {/* Submit */}
      <div className="flex items-end justify-end md:col-span-4">
        <button
          type="submit"
          className="px-8 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
}

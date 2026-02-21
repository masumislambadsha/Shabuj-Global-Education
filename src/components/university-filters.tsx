"use client";

import { useRouter, useSearchParams } from "next/navigation";
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
  const router = useRouter();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (country && country !== "all") params.set("country", country);
    if (city) params.set("city", city);
    if (minTuition) params.set("minTuition", minTuition);
    if (maxTuition) params.set("maxTuition", maxTuition);
    if (minRanking) params.set("minRanking", minRanking);
    if (maxRanking) params.set("maxRanking", maxRanking);
    if (establishedFrom) params.set("establishedFrom", establishedFrom);
    if (establishedTo) params.set("establishedTo", establishedTo);
    if (scholarship) params.set("scholarship", "true");
    if (ieltsRequired && ieltsRequired !== "any")
      params.set("ieltsRequired", ieltsRequired);
    if (intakeMonth) params.set("intakeMonth", intakeMonth);

    router.push(`/universities?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-stone-200 p-6"
    >
      <h3 className="font-serif text-xl text-stone-800 mb-6 pb-4 border-b border-stone-200">
        Refine Your Search
      </h3>

      <div className="space-y-6">
        {/* Country */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-stone-700 tracking-wider uppercase">
            Country
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border border-stone-300 px-3 py-2.5 text-sm text-stone-700 focus:border-stone-500 focus:outline-none transition-colors bg-white"
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
          <label className="text-xs font-medium text-stone-700 tracking-wider uppercase">
            City
          </label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-stone-300 px-3 py-2.5 text-sm text-stone-700 focus:border-stone-500 focus:outline-none transition-colors"
            placeholder="e.g. London"
          />
        </div>

        {/* Tuition */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-stone-700 tracking-wider uppercase">
            Tuition Range
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              value={minTuition}
              onChange={(e) => setMinTuition(e.target.value)}
              className="border border-stone-300 px-3 py-2.5 text-sm text-stone-700 focus:border-stone-500 focus:outline-none transition-colors"
              placeholder="Min"
            />
            <input
              value={maxTuition}
              onChange={(e) => setMaxTuition(e.target.value)}
              className="border border-stone-300 px-3 py-2.5 text-sm text-stone-700 focus:border-stone-500 focus:outline-none transition-colors"
              placeholder="Max"
            />
          </div>
        </div>

        {/* Ranking */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-stone-700 tracking-wider uppercase">
            Ranking Range
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              value={minRanking}
              onChange={(e) => setMinRanking(e.target.value)}
              className="border border-stone-300 px-3 py-2.5 text-sm text-stone-700 focus:border-stone-500 focus:outline-none transition-colors"
              placeholder="Best"
            />
            <input
              value={maxRanking}
              onChange={(e) => setMaxRanking(e.target.value)}
              className="border border-stone-300 px-3 py-2.5 text-sm text-stone-700 focus:border-stone-500 focus:outline-none transition-colors"
              placeholder="Worst"
            />
          </div>
        </div>

        {/* Established */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-stone-700 tracking-wider uppercase">
            Established Year
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              value={establishedFrom}
              onChange={(e) => setEstablishedFrom(e.target.value)}
              className="border border-stone-300 px-3 py-2.5 text-sm text-stone-700 focus:border-stone-500 focus:outline-none transition-colors"
              placeholder="From"
            />
            <input
              value={establishedTo}
              onChange={(e) => setEstablishedTo(e.target.value)}
              className="border border-stone-300 px-3 py-2.5 text-sm text-stone-700 focus:border-stone-500 focus:outline-none transition-colors"
              placeholder="To"
            />
          </div>
        </div>

        {/* Scholarship */}
        <div className="flex items-center gap-3">
          <input
            id="scholarship"
            type="checkbox"
            checked={scholarship}
            onChange={(e) => setScholarship(e.target.checked)}
            className="h-4 w-4 border-stone-400 text-stone-800 focus:ring-stone-500"
          />
          <label
            htmlFor="scholarship"
            className="text-sm text-stone-700 cursor-pointer"
          >
            Scholarships Available
          </label>
        </div>

        {/* IELTS */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-stone-700 tracking-wider uppercase">
            IELTS Requirement
          </label>
          <select
            value={ieltsRequired}
            onChange={(e) => setIeltsRequired(e.target.value)}
            className="border border-stone-300 px-3 py-2.5 text-sm text-stone-700 focus:border-stone-500 focus:outline-none transition-colors bg-white"
          >
            <option value="any">Any</option>
            <option value="true">Required</option>
            <option value="false">Not Required</option>
          </select>
        </div>

        {/* Intake month */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-stone-700 tracking-wider uppercase">
            Intake Month
          </label>
          <select
            value={intakeMonth}
            onChange={(e) => setIntakeMonth(e.target.value)}
            className="border border-stone-300 px-3 py-2.5 text-sm text-stone-700 focus:border-stone-500 focus:outline-none transition-colors bg-white"
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
        <div className="pt-4 border-t border-stone-200">
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm tracking-wider uppercase font-medium border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </form>
  );
}

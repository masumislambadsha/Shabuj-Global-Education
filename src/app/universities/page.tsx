import Link from "next/link";
import UniversityFiltersForm from "@/src/components/university-filters";
import UniversityList from "@/src/components/university-list";
import {
  UniversityFilters,
  getFilteredUniversities,
} from "@/src/lib/get-universities";

export const metadata = {
  title: "Find Universities | Shabuj Global",
  description:
    "Filter universities by country, city, tuition, ranking, scholarships, IELTS requirement and intakes.",
};

type PageProps = {
  searchParams: UniversityFilters;
};

export default async function UniversitiesPage({ searchParams }: PageProps) {
  const universities = await getFilteredUniversities(searchParams);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-xl">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-3 text-sm transition-colors"
              >
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Find Your Perfect University
              </h1>
              <p className="text-emerald-50 text-sm md:text-base">
                Explore top universities worldwide with advanced filters
                tailored to your needs
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <UniversityFiltersForm initialValues={searchParams} />
        <UniversityList universities={universities} />
      </div>
    </main>
  );
}

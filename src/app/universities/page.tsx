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
  searchParams: Promise<UniversityFilters>;
};

export default async function UniversitiesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const universities = await getFilteredUniversities(params);

  return (
    <main className="min-h-screen bg-stone-50 pt-16 relative">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Header */}
      <div className="border-b border-stone-200 bg-white relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-800 mb-3">
              University Directory
            </h1>
            <p className="text-stone-600 font-light leading-relaxed">
              Browse our curated collection of distinguished institutions.
              Utilize the filters to refine your search according to your
              academic preferences and requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-24">
              <UniversityFiltersForm initialValues={params} />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Mobile Filters Toggle */}
            <div className="lg:hidden mb-6">
              <details className="bg-white border border-stone-200 p-4">
                <summary className="font-serif text-lg text-stone-800 cursor-pointer">
                  Filters & Search
                </summary>
                <div className="mt-4">
                  <UniversityFiltersForm initialValues={params} />
                </div>
              </details>
            </div>

            <UniversityList universities={universities} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Loading() {
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
            <div className="h-12 bg-stone-200 animate-pulse mb-3 w-2/3"></div>
            <div className="h-4 bg-stone-200 animate-pulse w-full"></div>
            <div className="h-4 bg-stone-200 animate-pulse w-5/6 mt-2"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex gap-8">
          {/* Sidebar Skeleton */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-24">
              <div className="bg-white border border-stone-200 p-6">
                <div className="h-6 bg-stone-200 animate-pulse mb-6 w-3/4"></div>
                <div className="space-y-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i}>
                      <div className="h-3 bg-stone-200 animate-pulse mb-2 w-1/2"></div>
                      <div className="h-10 bg-stone-200 animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Skeleton */}
          <div className="flex-1 min-w-0">
            <div className="mb-6 bg-white border border-stone-200 p-4">
              <div className="h-4 bg-stone-200 animate-pulse w-1/4"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white border border-stone-200 p-6">
                  <div className="h-6 bg-stone-200 animate-pulse mb-2"></div>
                  <div className="h-4 bg-stone-200 animate-pulse mb-4 w-2/3"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-stone-200 animate-pulse"></div>
                    <div className="h-4 bg-stone-200 animate-pulse"></div>
                    <div className="h-4 bg-stone-200 animate-pulse w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

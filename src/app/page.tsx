import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="relative h-screen bg-stone-800 overflow-hidden">
        {/* Hero Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
            alt="University campus"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-b from-stone-900/50 to-stone-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl text-center text-white">
            <div className="mb-6">
              <div className="inline-block border border-white/30 px-4 py-2 mb-6">
                <span className="text-xs tracking-[0.3em] uppercase text-white/90">
                  Est. 2024
                </span>
              </div>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 tracking-tight">
              Shabuj Global
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-white/40"></div>
              <p className="text-xl md:text-2xl font-light tracking-wide text-white/90">
                University Finder
              </p>
              <div className="h-px w-16 bg-white/40"></div>
            </div>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light mb-12">
              Discover distinguished institutions of higher learning through our
              curated selection. Your journey to academic excellence begins
              here.
            </p>
            <Link
              href="/universities"
              className="inline-flex items-center gap-3 px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-stone-900 transition-all duration-300"
            >
              <span className="text-sm tracking-wider uppercase font-medium">
                Explore Universities
              </span>
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative px-4 py-20">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="max-w-6xl mx-auto relative">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-800 mb-4">
              Why Choose Shabuj Global
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-stone-300"></div>
              <p className="text-sm text-stone-500 uppercase tracking-wider">
                Our Services
              </p>
              <div className="h-px w-12 bg-stone-300"></div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-stone-200 p-8 text-center hover:border-stone-400 transition-colors">
              <div className="w-16 h-16 border-2 border-stone-300 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-7 h-7 text-stone-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">
                Refined Search
              </h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Comprehensive filtering by country, tuition fees, global
                ranking, and academic requirements
              </p>
            </div>

            <div className="bg-white border border-stone-200 p-8 text-center hover:border-stone-400 transition-colors">
              <div className="w-16 h-16 border-2 border-stone-300 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-7 h-7 text-stone-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">
                Compare Institutions
              </h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Detailed side-by-side comparison of universities and their
                offerings
              </p>
            </div>

            <div className="bg-white border border-stone-200 p-8 text-center hover:border-stone-400 transition-colors">
              <div className="w-16 h-16 border-2 border-stone-300 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-7 h-7 text-stone-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">
                Instant Results
              </h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Real-time server-side filtering for immediate and accurate
                search results
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

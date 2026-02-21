import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white border-2 border-stone-800 p-12">
          <div className="mb-6">
            <span className="font-serif text-8xl text-stone-800">404</span>
          </div>

          <h1 className="font-serif text-3xl text-stone-800 mb-4">
            Page Not Found
          </h1>

          <p className="text-stone-600 mb-8 font-light leading-relaxed">
            The page you are looking for does not exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-3 px-10 py-4 border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-medium"
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
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}

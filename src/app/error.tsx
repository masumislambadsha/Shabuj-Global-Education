"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-stone-50">
        <main className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            <div className="bg-white border-2 border-stone-800 p-12">
              <svg
                className="w-16 h-16 text-stone-400 mx-auto mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>

              <h1 className="font-serif text-3xl text-stone-800 mb-4">
                Unexpected Error
              </h1>

              <p className="text-stone-600 mb-8 font-light leading-relaxed">
                We apologize for the inconvenience. An unexpected error has
                occurred.
              </p>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={reset}
                  className="px-8 py-3 border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-medium"
                >
                  Try Again
                </button>

                <Link
                  href="/"
                  className="px-8 py-3 border-2 border-stone-300 text-stone-600 hover:border-stone-800 hover:text-stone-800 transition-all duration-300 text-sm tracking-wider uppercase font-medium"
                >
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

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
    console.error("Universities page error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-stone-50 pt-16 relative">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
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
              Something Went Wrong
            </h1>

            <p className="text-stone-600 mb-8 font-light leading-relaxed">
              We encountered an error while loading the universities. This might
              be a temporary issue.
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
      </div>
    </main>
  );
}

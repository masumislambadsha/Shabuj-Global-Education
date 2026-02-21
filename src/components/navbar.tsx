"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 border border-stone-800 flex items-center justify-center group-hover:bg-stone-800 transition-colors">
              <svg
                className="w-4 h-4 text-stone-800 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <span className="font-serif text-lg text-stone-800">
              Shabuj Global
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm tracking-wide uppercase transition-colors ${
                pathname === "/"
                  ? "text-stone-800 font-medium"
                  : "text-stone-600 hover:text-stone-800"
              }`}
            >
              Home
            </Link>
            <Link
              href="/universities"
              className={`text-sm tracking-wide uppercase transition-colors ${
                pathname === "/universities"
                  ? "text-stone-800 font-medium"
                  : "text-stone-600 hover:text-stone-800"
              }`}
            >
              Universities
            </Link>
            <Link
              href="/universities"
              className="px-6 py-2 border-2 border-stone-800 text-stone-800 text-sm tracking-wide uppercase hover:bg-stone-800 hover:text-white transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center border border-stone-300 hover:border-stone-800 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-5 h-5 text-stone-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-stone-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm tracking-wide uppercase transition-colors ${
                  pathname === "/"
                    ? "text-stone-800 font-medium"
                    : "text-stone-600"
                }`}
              >
                Home
              </Link>
              <Link
                href="/universities"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm tracking-wide uppercase transition-colors ${
                  pathname === "/universities"
                    ? "text-stone-800 font-medium"
                    : "text-stone-600"
                }`}
              >
                Universities
              </Link>
              <Link
                href="/universities"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2 border-2 border-stone-800 text-stone-800 text-sm tracking-wide uppercase text-center hover:bg-stone-800 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

# Shabuj Global - University Finder

A modern, elegant university search platform built with Next.js 15, featuring server-side filtering, real-time search, and a sophisticated comparison tool.

## 🎯 Features

### Core Functionality

- **Server-Side Filtering**: All filtering logic executed on the backend via Supabase
- **Real University Data**: Database populated with real university names and information
- **Advanced Search**: Filter by country, city, tuition, ranking, established year
- **Innovative Filters**:
  - Scholarship availability
  - IELTS requirement status
  - Intake months (enrollment periods)
- **Compare Feature**: Side-by-side comparison of up to 2 universities with visual indicators

### Technical Highlights

- **Next.js 15 App Router**: Leveraging latest React Server Components
- **Server Components**: Data fetching happens on the server for optimal performance
- **Client Components**: Interactive elements (filters, modals) use client-side rendering
- **Type Safety**: Full TypeScript implementation throughout
- **Responsive Design**: Mobile-first approach with sticky sidebar on desktop
- **SEO Optimized**: Proper metadata, semantic HTML, and server-side rendering
- **Error Handling**: Comprehensive error boundaries and loading states
- **Classic Design**: Elegant, timeless UI with serif typography and subtle patterns

## 🏗️ Architecture

### Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Language**: TypeScript
- **Deployment Ready**: Optimized for Vercel/production

### Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with navbar
│   ├── page.tsx                # Homepage with hero
│   ├── error.tsx               # Global error boundary
│   ├── not-found.tsx           # 404 page
│   ├── globals.css             # Global styles
│   ├── favicon.svg             # Custom book icon
│   └── universities/
│       ├── page.tsx            # Universities listing (Server Component)
│       ├── loading.tsx         # Loading skeleton
│       └── error.tsx           # Error boundary
├── components/
│   ├── navbar.tsx              # Navigation bar
│   ├── university-filters.tsx # Filter form (Client Component)
│   ├── university-list.tsx    # University cards (Client Component)
│   └── compare-modal.tsx      # Comparison modal (Client Component)
└── lib/
    ├── supabaseClient.ts      # Supabase configuration
    └── get-universities.ts    # Server-side filtering logic
```

## 🚀 Performance Optimizations

1. **Server Components**: Data fetching on server reduces client-side JavaScript
2. **Streaming**: Loading states provide instant feedback
3. **Efficient Queries**: Supabase queries optimized with proper indexing
4. **Code Splitting**: Automatic code splitting via Next.js
5. **Static Assets**: Optimized images and SVG icons
6. **Minimal Client JS**: Only interactive components use client-side code

## 🎨 Design Philosophy

- **Classic Elegance**: Timeless design with serif fonts and neutral colors
- **Stone Color Palette**: Professional stone-50 to stone-900 range
- **Subtle Patterns**: Background grid pattern for texture
- **Clear Hierarchy**: Proper use of typography and spacing
- **Accessibility**: Semantic HTML and proper ARIA labels

## 📊 Database Schema

### Universities Table

```typescript
{
  id: number;
  name: string;
  country: string;
  city: string;
  tuition_fee: number;
  ranking: number;
  established_year: number;
  scholarship_available: boolean;
  ielts_required: boolean;
  intake_months: string;
}
```

## 🔍 Filter Implementation

All filters are processed server-side in `getFilteredUniversities()`:

- **Country**: Exact match filter
- **City**: Case-insensitive partial match (ILIKE)
- **Tuition**: Range filter (min/max)
- **Ranking**: Range filter (lower number = better ranking)
- **Established Year**: Range filter
- **Scholarship**: Boolean filter
- **IELTS**: Boolean filter with "any" option
- **Intake Month**: Partial match in comma-separated string

## 🎯 Key Implementation Details

### Server-Side Filtering

```typescript
// All filtering happens in server function
export async function getFilteredUniversities(
  filters: UniversityFilters,
): Promise<UniversityRow[]> {
  let query = supabase.from("universities").select("*");

  // Apply filters conditionally
  if (filters.country && filters.country !== "all") {
    query = query.eq("country", filters.country);
  }
  // ... more filters

  return data ?? [];
}
```

### Client-Side Navigation

```typescript
// Form submission builds URL params and navigates
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const params = new URLSearchParams();
  // Build params from form state
  router.push(`/universities?${params.toString()}`);
};
```

### Compare Feature

- Select up to 2 universities via checkboxes
- Visual indicators show which values are better/worse
- Modal overlay with side-by-side comparison
- Highlights differences in tuition, ranking, benefits

## 🌟 Innovative Features

1. **Scholarship Filter**: Helps students find financial aid opportunities
2. **IELTS Requirement**: Critical for international students
3. **Intake Months**: Plan enrollment based on available start dates
4. **Sticky Sidebar**: Filters always accessible while browsing
5. **Smart Comparison**: Visual indicators for better decision-making
6. **Mobile Collapsible Filters**: Optimized mobile experience

## 📱 Responsive Design

- **Mobile**: Collapsible filter accordion
- **Tablet**: 2-column university grid
- **Desktop**: 3-column grid with sticky sidebar
- **Large Desktop**: Optimized spacing and layout

## ✅ Requirements Checklist

- [x] Next.js App Router
- [x] Tailwind CSS
- [x] Real university names
- [x] All core data fields
- [x] Server-side filtering
- [x] Innovative filter ideas
- [x] Fast and responsive
- [x] SEO-friendly
- [x] Clean code structure
- [x] Compare feature (bonus)
- [x] Error handling
- [x] Loading states
- [x] Type safety

## 🚦 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env`
4. Run development server: `npm run dev`
5. Open http://localhost:3000

## 🔐 Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📝 Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting configured
- **Clean Architecture**: Separation of concerns
- **Reusable Components**: DRY principles
- **Error Boundaries**: Graceful error handling
- **Loading States**: Better UX during data fetching

## 🎓 Learning Outcomes

This project demonstrates:

- Modern Next.js 15 patterns
- Server vs Client Component usage
- Efficient data fetching strategies
- Form handling and URL state management
- Database query optimization
- Responsive design implementation
- Error handling best practices
- TypeScript in React applications

---

Built with ❤️ for Shabuj Global

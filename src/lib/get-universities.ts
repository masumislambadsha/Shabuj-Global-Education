import { supabase } from "./supabaseClient";

export type UniversityRow = {
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
};

export type UniversityFilters = {
  country?: string;
  city?: string;
  minTuition?: string;
  maxTuition?: string;
  minRanking?: string;
  maxRanking?: string;
  establishedFrom?: string;
  establishedTo?: string;
  scholarship?: string;
  ieltsRequired?: string;
  intakeMonth?: string;
};

export async function getFilteredUniversities(
  filters: UniversityFilters
): Promise<UniversityRow[]> {
  let query = supabase
    .from("universities")
    .select("*") as any;

  if (filters.country && filters.country !== "all") {
    query = query.eq("country", filters.country);
  }

  if (filters.city) {
    query = query.ilike("city", `%${filters.city}%`);
  }

  if (filters.minTuition) {
    query = query.gte("tuition_fee", Number(filters.minTuition));
  }
  if (filters.maxTuition) {
    query = query.lte("tuition_fee", Number(filters.maxTuition));
  }

  if (filters.minRanking) {
   
    query = query.lte("ranking", Number(filters.minRanking));
  }
  if (filters.maxRanking) {
    query = query.gte("ranking", Number(filters.maxRanking));
  }

  if (filters.establishedFrom) {
    query = query.gte("established_year", Number(filters.establishedFrom));
  }
  if (filters.establishedTo) {
    query = query.lte("established_year", Number(filters.establishedTo));
  }

  if (filters.scholarship === "true") {
    query = query.eq("scholarship_available", true);
  }

  if (filters.ieltsRequired === "true") {
    query = query.eq("ielts_required", true);
  } else if (filters.ieltsRequired === "false") {
    query = query.eq("ielts_required", false);
  }

  if (filters.intakeMonth && filters.intakeMonth !== "") {
    query = query.ilike("intake_months", `%${filters.intakeMonth}%`);
  }

  const { data, error } = await query.order("ranking", { ascending: true });

  if (error) {
    console.error("Error fetching universities", error);
    return [];
  }

  return data ?? [];
}

export interface Data {
  results: Movie[];
  page: number;
  total_pages: number;
}


export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres:Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Companie[];
  production_countries: [],
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status :string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface Genre {
  id: number;
  name: string;
}

export interface Companie {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string
}

export interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
}
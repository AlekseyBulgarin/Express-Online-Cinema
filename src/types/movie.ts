// types.ts — типы для OMDb API

export interface Rating {
  Source: string;
  Value: string;
}

export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID: string;
  Type: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
}

// Ответ при поиске (Search) — здесь фильмы урезаны
export interface SearchItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface SearchResponse {
  Search: SearchItem[];
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
}

// Ответ при запросе по id (i=...) — это полный Movie + поле Response
export type MovieResponse = Movie & {
  Response: "True" | "False";
  Error?: string;
};
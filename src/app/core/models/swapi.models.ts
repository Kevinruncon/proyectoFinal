export interface SwapiListResponse<T> {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: T[];
}

export interface SwapiPersonSummary {
  uid: string;
  name: string;
  url: string;
}

export interface SwapiDetailResponse<T> {
  message: string;
  result: {
    properties: T;
    description: string;
    uid: string;
  };
}

export interface PersonProperties {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  created: string;
  edited: string;
  url: string;
}

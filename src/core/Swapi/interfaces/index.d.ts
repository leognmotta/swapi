export interface Options {
  page?: number;
  search?: string;
}

export interface FetchParams {
  path: string;
  options?: Options;
}

export interface Pagination<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Planets {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}


export interface Search {
  id?: number;
  title: string;
}
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [];
  url: string;
  created: Date;
}
export interface CharactersQuery {
  info: {
    count: number,
    pages: number,
    next?: string,
    prev?: string
  };
  results?: [];
}

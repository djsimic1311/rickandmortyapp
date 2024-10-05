export interface ApiResponseDataWrapper<T> {
  info: ApiResponseInfo,
  results: T[]
}

interface ApiResponseInfo {
  count: number,
  pages: number,
  next: string | null,
  prev: string | null,
}

export interface CharacterApiType {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string,
  },
  location: {
    name: string,
    url: string,
  }
  image: string,
  episode: string[], //url
  url: string,
  created: string,
}

export interface LocationApiType {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: string[], //url
  url: string,
  created: string
}

export interface EpisodeApiType {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[], //url
  url: string,
  created: string
}
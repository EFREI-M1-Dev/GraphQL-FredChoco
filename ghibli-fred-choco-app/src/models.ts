export type PeopleModel = {
  id: string;
  name: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
  films: string[];
  url: string;
}

export type FilmModel = {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  description: string;
  director: string;
  producer: string;
  release_date: number;
  running_time: number;
  rt_score: number;
  people: string[];
  url: string;
}
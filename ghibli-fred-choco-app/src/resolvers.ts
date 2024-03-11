import { GraphQLError } from "graphql";
import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
  Query: {
    getFilms: (_, __, {dataSources}) => {
      return dataSources.ghibliAPI.getFilms()
    },
    getPeople: (_, __, {dataSources}) => {
      return dataSources.ghibliAPI.getPeople()
    }
  },
  People: {
    films: (parent, _, {dataSources}) => {
      return parent.films.filter((film) => film.split('/').pop() !== '').map((film) => dataSources.ghibliAPI.getFilmBy(film.split('/').pop()))
    }
  },
  Film: {
    people: (parent, _, {dataSources}) => {
      return parent.people.filter((people) => people.split('/').pop() !== '').map((people) => dataSources.ghibliAPI.getPersonBy(people.split('/').pop()))
    }
  }
}
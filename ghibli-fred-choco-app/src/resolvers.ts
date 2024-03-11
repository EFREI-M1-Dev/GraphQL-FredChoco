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
      return dataSources.ghibliAPI.getFilmBy(parent.id)
    }
  },
  Film: {
    people: (parent, _, {dataSources}) => {
      return parent.people.map((person) => dataSources.ghibliAPI.getPersonBy(person.id))
    }
  }
}
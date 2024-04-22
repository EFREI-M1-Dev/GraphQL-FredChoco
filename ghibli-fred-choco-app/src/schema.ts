import gql from "graphql-tag";

export const typeDefs = gql`
type Film {
    id: ID!
    title: String
    people: [People!]
}

type People {
    id: ID!
    name: String
    eyeColor: String
    films: [Film!]
}

type Query {
    getFilms: [Film!]!
    getPeople: [People!]!
}

type Mutation {
    incrementNumberOfLikes(id: ID!): IncrementNumberOfLikesResponse!
}

type IncrementNumberOfLikesResponse {
    code: Int!
    success: Boolean!
    message: String!
    numberOfLikes: Int!
}


`
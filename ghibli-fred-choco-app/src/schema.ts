import gql from "graphql-tag";

export const typeDefs = gql`
type Film {
    id: ID!
    title: String
    people: [People!]
    url: String!
}

type People {
    id: ID!
    name: String
    eye_color: String
    films: [Film!]
    url: String!
}

type Query {
    getFilms: [Film!]!
    getPeople: [People!]!
}


`
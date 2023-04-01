import { makeExecutableSchema } from "@graphql-tools/schema";
// @ts-ignore
import typeDefs from "./schema.graphql";

type Link = {
  id: string;
  url: string;
  description: string;
}

const links: Link[] = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

const resolvers = {
  Query: {
    info: () => `This is the API of a news app.`,
    feed: () => links,
  },
  Link: {
    id: (parent: Link) => parent.id,
    description: (parent: Link) => parent.description,
    url: (parent: Link) => parent.url,
  }
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

const TrackType = new GraphQLObjectType({
  name: "Track",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    artist: { type: GraphQLString },
    genre: { type: GraphQLString },
    duration: { type: GraphQLString },
  }),
});

module.exports = TrackType;

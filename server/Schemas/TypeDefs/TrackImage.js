const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

const TrackImage = new GraphQLObjectType({
  name: "TrackImage",
  fields: () => ({
    trackId: { type: GraphQLInt },
    imgUrl: { type: GraphQLString },
  }),
});

module.exports = TrackImage;

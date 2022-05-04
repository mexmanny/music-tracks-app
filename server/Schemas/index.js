const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");
const TrackType = require("./TypeDefs/TrackType");
const TrackImage = require("./TypeDefs/TrackImage");
const trackData = require("../tracks.json");
const imgData = require("../images.json");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllTracks: {
      type: new GraphQLList(TrackType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return trackData;
      },
    },

    getTrackInfo: {
      type: new GraphQLList(TrackType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return trackData.filter((track) => track.id == args.id);
      },
    },
    getImgInfo: {
      type: new GraphQLList(TrackImage),
      args: { trackId: { type: GraphQLInt } },
      resolve(parent, args) {
        //Filter always returns an array
        return imgData.filter((img) => img.trackId == args.trackId);
      },
    },
  },
});

//used to create update or delete , mutate data
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    createTrack: {
      type: TrackType,
      args: {
        title: { type: GraphQLString },
        artist: { type: GraphQLString },
        genre: { type: GraphQLString },
        duration: { type: GraphQLString },
      },
      resolve(parent, args) {
        trackData.push({
          id: trackData.length + 1,
          title: args.title,
          artist: args.artist,
          genre: args.genre,
          duration: args.duration,
        });
        return args;
      },
    },
  }),
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

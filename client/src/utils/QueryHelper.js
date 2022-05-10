export const getAllTracksQuery = () => {
  return `query {
            getAllTracks{
            id,
            title,
            artist,
            genre,
            duration
        }
    }`;
};

export const getTrackByIdQuery = (id) => {
  return `query {
            getTrackInfo(id:${id}){
            id,
            title,
            artist,
            genre,
            duration
        }
    }`;
};

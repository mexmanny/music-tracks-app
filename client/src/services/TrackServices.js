import { getAllTracksQuery, getTrackByIdQuery } from "../utils/QueryHelper";

export const getAllTracks = async () => {
  try {
    const data = await fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: getAllTracksQuery() }),
    });
    return data.json();
  } catch (err) {
    console.log(err);
  }
};

export const getTrackById = async (id) => {
  try {
    const data = await fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: getTrackByIdQuery(id) }),
    });
    return data.json();
  } catch (err) {
    console.log(err);
  }
};

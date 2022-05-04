import React from "react";
import { useEffect, useState } from "react";
import TrackCard from "../TrackCard/index";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: block;

  h1 {
    color: white;
  }
`;

const TRACKS_QUERY = `
query {
  getAllTracks{
    id,
    title,
    artist,
    genre,
    duration
  }
}
`;

const tracksStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

function TrackList() {
  const [trackData, setTrackData] = useState([]);

  useEffect(() => {
    fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: TRACKS_QUERY }),
    })
      .then((res) => res.json())
      .then((trackInfo) => setTrackData(trackInfo.data.getAllTracks));
  }, []);
  return (
    <Wrapper>
      <h1>TRACKS</h1>
      <div style={tracksStyle} className="tracks">
        {trackData.map((track) => (
          <div key={track.id}>
            <TrackCard track={track} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default TrackList;

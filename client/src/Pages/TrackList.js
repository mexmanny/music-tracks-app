import React from "react";
import { useEffect, useState } from "react";
import TrackCard from "../components/TrackCard/index";
import styled from "@emotion/styled";
import { getAllTracks } from "../services/TrackServices";

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: block;

  h1 {
    color: white;
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
    (async () => {
      const data = await getAllTracks();
      setTrackData(data.data.getAllTracks);
    })();
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

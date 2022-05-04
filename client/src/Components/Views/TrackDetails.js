import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrackCardDetails from "../TrackCardDetails";
import NavBar from "../NavBar";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TrackDetails() {
  const [trackData, setTrackData] = useState([]);
  const { id } = useParams();

  const TRACK_INFO_QUERY = `
    query {
    getTrackInfo(id:${id}){
      id,
      title,
      artist,
      genre,
      duration
    }
  }
  `;

  useEffect(() => {
    fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: TRACK_INFO_QUERY }),
    })
      .then((res) => res.json())
      .then((trackInfo) =>
        setTrackData(
          trackInfo.data.getTrackInfo.length > 0
            ? trackInfo.data.getTrackInfo[0]
            : null
        )
      )
      .catch((err) => console.log(err));
  }, [TRACK_INFO_QUERY]);

  if (trackData) {
    return (
      <>
        <NavBar />
        <Wrapper>
          <TrackCardDetails track={trackData} />
        </Wrapper>
      </>
    );
  } else {
    return <h5>Not found</h5>;
  }
}

export default TrackDetails;

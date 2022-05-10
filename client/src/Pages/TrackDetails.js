import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrackDetailsCard from "../components/TrackDetailsCard";
import NavBar from "../components/NavBar";
import styled from "@emotion/styled";
import { getTrackById } from "../services/TrackServices";

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

  useEffect(() => {
    (async () => {
      const data = await getTrackById(id);
      setTrackData(
        data.data.getTrackInfo.length > 0 ? data.data.getTrackInfo[0] : null
      );
    })();
  }, []);

  if (trackData) {
    return (
      <>
        <NavBar />
        <Wrapper>
          <title>{trackData.title}</title>
          <TrackDetailsCard track={trackData} />
        </Wrapper>
      </>
    );
  } else {
    return <h5>Not found</h5>;
  }
}

export default TrackDetails;

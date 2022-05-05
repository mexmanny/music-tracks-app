import React, { useEffect, useState } from "react";
import { TrackBackground, TrackContainer } from "../TrackCard/style";

const TrackCardDetails = ({ track }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!track.id) return;
    fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: ` query {
                getImgInfo(trackId:${track.id}){
                  trackId,
                  imgUrl
                }
              }`,
      }),
    })
      .then((res) => res.json())
      .then((imgInfo) => {
        setImage(
          imgInfo.data.getImgInfo.length > 0 ? imgInfo.data.getImgInfo[0] : null
        );
      });
  }, [track]);

  return (
    <div style={{ width: "90%", display: "block", margin: "0 auto" }}>
      <TrackContainer>
        <TrackBackground
          style={image ? { backgroundImage: `url(${image.imgUrl})` } : {}}
        />
        <h1>{track.title}</h1>
        <h2>artist: {track.artist}</h2>
        <h2>genre: {track.genre}</h2>
        <h2>duration: {track.duration}</h2>
      </TrackContainer>
    </div>
  );
};

export default TrackCardDetails;

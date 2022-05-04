import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { TrackContainer, TrackBackground } from "./style";

function TrackCard(props) {
  const IMG_QUERY = `
query {
  getImgInfo(trackId:${props.track.id}){
    trackId,
    imgUrl
  }
}`;
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!props.track.id) return;
    fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: IMG_QUERY,
      }),
    })
      .then((res) => res.json())
      //promise
      .then((imgInfo) =>
        setImage(
          imgInfo.data.getImgInfo.length > 0 ? imgInfo.data.getImgInfo[0] : null
        )
      );
  }, [props.track.id, IMG_QUERY]);
  return (
    <>
      <title>{props.track.title}</title>

      <Link
        state={{ imgUrl: image?.imgUrl }}
        style={{ width: "90%", display: "block", margin: "0 auto" }}
        to={`/tracks/${props.track.id}`}
      >
        <TrackContainer>
          <TrackBackground
            style={image ? { backgroundImage: `url(${image.imgUrl})` } : {}}
          />
          <h3>Track</h3>
          <h2>{props.track.title.toUpperCase()}</h2>
        </TrackContainer>
      </Link>
    </>
  );
}

export default TrackCard;

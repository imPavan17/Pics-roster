import React from "react";

export default function ImageCard(props) {
  return (
    <img
      src={props.image && props.image.urls && props.image.urls.regular}
      style={{ width: "100%" }}
      alt="Not found"
    />
  );
}

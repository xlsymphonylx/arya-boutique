import React from "react";
import Service from "../services/Item";
function Answer({ service }) {
  return (
    <>
      <Service
        key={service.name}
        logo={service.photo}
        title={service.name}
        price={service.price}
        description={service.description}
      />
    </>
  );
}

export default Answer;

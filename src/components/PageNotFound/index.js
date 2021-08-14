import React from "react";
import img from "../../images/meme.jpg";

import { Back } from "./NotFoundElements";

const PageNotFound = () => {
  return (
    <>
      <Back
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        404
        <br /> Page not found!
        <br />{" "}
        <div
          style={{
            "font-size": "20px",
            "justify-content": " center",
            "align-items": "center",
            " color": "#fff",
          }}
        >
          {" "}
          that's what he said
        </div>
      </Back>
    </>
  );
};

export default PageNotFound;

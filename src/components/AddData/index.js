import React from "react";
import img from "../../images/svg-10.svg";
import { AddWrapper, AddText, AddImage } from "./AddElements";

const AddData = () => {
  return (
    <>
      <AddWrapper>
        <AddImage src={img} alt="noyet"></AddImage>
        <AddText>No data imported yet !</AddText>
      </AddWrapper>
    </>
  );
};

export default AddData;

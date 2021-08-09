import React from "react";
import { useState, useEffect } from "react";

import { SubWrapper, ExWrapper, ExTxt } from "./ExElements";
import "react-toastify/dist/ReactToastify.css";

const AddData = () => {
  const [file, setfile] = useState(null);

  const fetchData = async () => {
    // eslint-disable-next-line
    const res = await fetch("http://localhost:8000/public", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setfile(res));
  };

  useEffect(() => {
    fetchData();
  }, []);

  /*
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  
  const handleAction = async (data) => {
    const formData = new FormData();
    formData.append("file", selected);
    const res = await fetch("http://localhost:8000/public", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    if (res.status === true) {
      toast.success("Upload succesful!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Upload failed!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    setfile(false);
    setshow(false);
    fetchData();
  };
  */

  return (
    <>
      {file === null ? (
        <ExWrapper>
          <SubWrapper>
            <ExTxt> Click on DATASET to upload a new dataset first!</ExTxt>
          </SubWrapper>
        </ExWrapper>
      ) : (
        <ExWrapper></ExWrapper>
      )}
    </>
  );
};

export default AddData;

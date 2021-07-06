import React from "react";
import { useState } from "react";
import img from "../../../images/svg-10.svg";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import axios from "axios";

import {
  AddWrapper,
  AddText,
  AddImage,
  AddBtnWrapper,
  AddBtn,
  AddBtnT,
  AddTxt,
  AddTxtT,
  TableWrapper,
  OptWrapper,
  Del,
  Mark,
  SelectedWrapper,
  TxtWrapper,
} from "./AddElements";
import { AiFillFolderAdd, AiFillDelete } from "react-icons/ai";
import { ImCheckmark } from "react-icons/im";
import { FiUpload } from "react-icons/fi";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddData = () => {
  const [file, setfile] = useState(true);
  const [selected, setselected] = useState(null);
  const [show, setshow] = useState(false);

  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Open Sans"].join(","),
    },
  });

  function createData(selected, name, calories, fat, carbs, protein) {
    return { selected, name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(
      "Yes",
      "FileName",
      "Intern data for the past 3 months",
      "Data/FileName",
      "02/07/2021"
    ),
  ];

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
    toast.info("Upload succesful!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    setfile(false);
    setshow(false);
  };

  const handleChange = (event) => {
    setselected(event.target.files[0]);
    setshow(true);
  };

  return (
    <>
      {file ? (
        <AddWrapper>
          <AddBtnWrapper>
            <AddTxt>
              Upload a new dataset, or select one as your primary.
            </AddTxt>
            <AddBtn onClick={handleClick}>
              Select file
              <AiFillFolderAdd size="25px"></AiFillFolderAdd>
            </AddBtn>
            <input
              type="file"
              name="file"
              style={{ display: "none" }}
              ref={hiddenFileInput}
              onChange={handleChange}
            />
          </AddBtnWrapper>
          {show === false ? (
            <></>
          ) : (
            <SelectedWrapper>
              <TxtWrapper>
                <AddTxtT style={{ "font-weight": "bold" }}>
                  Selected file:
                </AddTxtT>
                <AddTxtT>{selected.name}</AddTxtT>
              </TxtWrapper>
              <AddBtnT onClick={handleAction}>
                Upload
                <FiUpload size="20px"></FiUpload>
              </AddBtnT>
            </SelectedWrapper>
          )}
          <AddImage src={img} alt="noyet"></AddImage>
          <AddText>No data imported yet !</AddText>
        </AddWrapper>
      ) : (
        <AddWrapper>
          <AddBtnWrapper>
            <AddTxt>
              Upload a new dataset, or select one as your primary.
            </AddTxt>
            <AddBtn onClick={handleClick}>
              Select file
              <AiFillFolderAdd size="25px"></AiFillFolderAdd>
            </AddBtn>
            <input
              type="file"
              name="file"
              style={{ display: "none" }}
              ref={hiddenFileInput}
              onChange={handleChange}
            />
          </AddBtnWrapper>
          {show === false ? (
            <></>
          ) : (
            <SelectedWrapper>
              <TxtWrapper>
                <AddTxtT style={{ "font-weight": "bold" }}>
                  Selected file:
                </AddTxtT>
                <AddTxtT>{selected.name}</AddTxtT>
              </TxtWrapper>
              <AddBtnT onClick={handleAction}>
                Upload
                <FiUpload size="20px"></FiUpload>
              </AddBtnT>
            </SelectedWrapper>
          )}
          <ThemeProvider theme={theme}>
            <TableWrapper>
              <Table aria-label="datasets table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ "font-weight": "bold" }}>
                      Selected
                    </TableCell>
                    <TableCell style={{ "font-weight": "bold" }}>
                      Name
                    </TableCell>
                    <TableCell align="right" style={{ "font-weight": "bold" }}>
                      Description
                    </TableCell>
                    <TableCell align="right" style={{ "font-weight": "bold" }}>
                      File Path
                    </TableCell>
                    <TableCell align="right" style={{ "font-weight": "bold" }}>
                      Uploaded
                    </TableCell>
                    <TableCell align="right" style={{ "font-weight": "bold" }}>
                      Options
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.selected}
                      </TableCell>
                      <TableCell calign="right">{row.name}</TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">
                        <OptWrapper>
                          <Mark>
                            <ImCheckmark
                              color="white"
                              size="20px"
                            ></ImCheckmark>
                          </Mark>
                          <Del>
                            <AiFillDelete
                              color="white"
                              size="20px"
                            ></AiFillDelete>
                          </Del>
                        </OptWrapper>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableWrapper>
          </ThemeProvider>
        </AddWrapper>
      )}
      <ToastContainer
        toastStyle={{ backgroundColor: "#096192" }}
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        transition={Slide}
      />
    </>
  );
};

export default AddData;

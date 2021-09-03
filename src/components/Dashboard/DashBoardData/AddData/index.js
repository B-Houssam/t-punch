import React from "react";
import { useState, useEffect } from "react";
import img from "../../../../images/svg-10.svg";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
  SelectedWrapper,
  TxtWrapper,
} from "./AddElements";
import { AiFillFolderAdd, AiFillDelete } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddData = () => {
  const [file, setfile] = useState(null);
  const [selected, setselected] = useState(null);
  const [show, setshow] = useState(false);

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

  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Open Sans"].join(","),
    },
  });

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

  const handleChange = (event) => {
    setselected(event.target.files[0]);
    setshow(true);
  };

  const clickDel = async () => {
    const res = await fetch("http://localhost:8000/public", {
      method: "DELETE",
    }).then((res) => res.json());
    if (res.status === true) {
      toast.success("Delete succesful!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Delete failed!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    setfile(null);
    //fetchData();
  };

  return (
    <>
      {file === null ? (
        <AddWrapper>
          <AddBtnWrapper>
            <AddTxt>
              Upload a new data source or replace the selected one.
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
            <AddTxt>Upload a new dataset or replace the selected one.</AddTxt>
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
                      Name
                    </TableCell>
                    <TableCell align="right" style={{ "font-weight": "bold" }}>
                      File Size (bytes)
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
                  {/** rows.map((row) => (*/}
                  <TableRow //key={row.name}
                  >
                    <TableCell calign="right">{file.name}</TableCell>
                    <TableCell align="right">{file.size}</TableCell>
                    <TableCell align="right">
                      {"datasest/" + file.name}
                    </TableCell>
                    <TableCell align="right">{file.birthtime}</TableCell>
                    <TableCell align="right">
                      <OptWrapper>
                        <Del onClick={clickDel}>
                          <AiFillDelete
                            color="white"
                            size="20px"
                          ></AiFillDelete>
                        </Del>
                      </OptWrapper>
                    </TableCell>
                  </TableRow>
                  {/** ))} */}
                </TableBody>
              </Table>
            </TableWrapper>
          </ThemeProvider>
        </AddWrapper>
      )}
      <ToastContainer
        //toastStyle={{ backgroundColor: "#096192" }}
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

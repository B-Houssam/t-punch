import { React, useState } from "react";
import img from "../../../images/svg-10.svg";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import {
  AddWrapper,
  AddText,
  AddImage,
  AddBtnWrapper,
  AddBtn,
  AddTxt,
  TableWrapper,
  OptWrapper,
  Del,
  Mark,
} from "./AddElements";
import { AiFillFolderAdd, AiFillDelete } from "react-icons/ai";
import { ImCheckmark } from "react-icons/im";

const AddData = () => {
  const [file, setfile] = useState(false);

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

  return (
    <>
      {file ? (
        <AddWrapper>
          <AddBtnWrapper>
            <AddTxt>
              Upload a new dataset, or select one as your primary.
            </AddTxt>
            <AddBtn>
              Upload Data
              <AiFillFolderAdd></AiFillFolderAdd>
            </AddBtn>
          </AddBtnWrapper>
          <AddImage src={img} alt="noyet"></AddImage>
          <AddText>No data imported yet !</AddText>
        </AddWrapper>
      ) : (
        <AddWrapper>
          <AddBtnWrapper>
            <AddTxt>
              Upload a new dataset, or select one as your primary.
            </AddTxt>
            <AddBtn>
              Upload Data
              <AiFillFolderAdd size="20px"></AiFillFolderAdd>
            </AddBtn>
          </AddBtnWrapper>
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
    </>
  );
};

export default AddData;

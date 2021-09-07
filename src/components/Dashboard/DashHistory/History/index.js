import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  //AddImage,
  //AddText,
  TableWrapper,
  //DelBtn,
} from "./HisElements";
//import img from "../../../../images/svg-10.svg";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//import { ToastContainer, toast, Slide } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

const His = () => {
  const [data, setdata] = useState(null);
  const fetchData = async () => {
    // eslint-disable-next-line
    const res = await fetch("http://localhost:3002/getanal", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setdata(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Open Sans"].join(","),
    },
  });
  /*
  const handleDel = async () => {
    const res = await fetch("http://localhost:3002/delanal", {
      method: "DELETE",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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
      setdata(null);
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
  };
  */

  return (
    <>
      {data === null ? (
        <></>
      ) : (
        <>
          <Container>
            <Wrapper>
              <ThemeProvider theme={theme}>
                <TableWrapper>
                  <Table aria-label="datasets table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ "font-weight": "bold" }}>
                          Query:
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ "font-weight": "bold" }}
                        >
                          Last executed on:
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((item) => {
                        return (
                          <TableRow>
                            <TableCell calign="right">{item.query}</TableCell>
                            <TableCell align="right">{item.date}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableWrapper>
              </ThemeProvider>
              {/* <DelBtn onClick={handleDel}>Delete History</DelBtn>*/}
            </Wrapper>
          </Container>
        </>
      )}
      {/*
      <ToastContainer
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
      */}
    </>
  );
};

export default His;

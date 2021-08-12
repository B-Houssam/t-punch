import React, { useEffect, useState } from "react";
import {
  AccWrapper,
  AccContainer,
  AccInfoContainer,
  //AccPhContainer,
  //AccTxt,
  //AccPh,
  //AccLo,
  AccInfoBtnSave,
  AccInfoBtnWrapper,
  //AccInfoBtnCancel,
  Form,
  FormContent,
  FormInput,
  FormLabel,
  FormPass,
  //Overlay,
} from "./AccElements";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import img from "../../../../images/svg-9.svg";

//import { MdModeEdit } from "react-icons/md";
//import { FiLogOut } from "react-icons/fi";

const Account = () => {
  const [nick, setnick] = useState();
  const [key, setkey] = useState();
  const [newnick, setnewnick] = useState("");
  const [newkey, setnewkey] = useState("");
  const [pass, setpass] = useState("");
  const [conf, setconf] = useState("");

  const fetchData = async () => {
    // eslint-disable-next-line
    const res = await fetch("http://localhost:3001/show", {
      method: "GET",
    }).then((res) => res.json());
    if (res.status === true) {
      setkey(res.show.username);
      setnick(res.show.nickname);
    }
  };

  const handleSubmit = async () => {
    try {
      if (pass === conf) {
        const res = await fetch("http://localhost:3001/update", {
          method: "POST",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            old: key,
            nickname: newnick,
            key: newkey,
            password: pass,
          }),
        }).then((res) => res.json());
        if (res.status === true) {
          toast.success("User Updated!", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        toast.error("Passwords does not match!", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AccWrapper>
        <AccContainer>
          <AccInfoContainer>
            {/*
            <AccPhContainer>
              <Overlay>
                <MdModeEdit size="40px" color="white"></MdModeEdit>
              </Overlay>
              <AccPh src={img}></AccPh>
            </AccPhContainer>
            */}
            <FormContent>
              <Form onSubmit={handleSubmit} action="#">
                <FormPass style={{ "grid-template-columns": "1fr 1fr" }}>
                  <FormLabel htmlFor="for">Displayed Name</FormLabel>
                  <FormLabel htmlFor="for">Key</FormLabel>
                  <FormInput
                    onChange={(e) => {
                      setnewnick(e.target.value);
                    }}
                    placeholder={nick}
                    type="text"
                    required
                  ></FormInput>
                  <FormInput
                    onChange={(e) => {
                      setnewkey(e.target.value);
                    }}
                    placeholder={key}
                    type="text"
                    required
                  ></FormInput>
                </FormPass>
                <FormPass style={{ "grid-template-columns": "1fr 1fr" }}>
                  <FormLabel htmlFor="for">Password</FormLabel>
                  <FormLabel htmlFor="for">Confirm Password</FormLabel>
                  <FormInput
                    onChange={(e) => {
                      setpass(e.target.value);
                    }}
                    type="password"
                    placeholder="****"
                    required
                  ></FormInput>
                  <FormInput
                    required
                    onChange={(e) => {
                      setconf(e.target.value);
                    }}
                    placeholder="****"
                    type="password"
                  ></FormInput>
                </FormPass>
              </Form>
            </FormContent>
            <AccInfoBtnWrapper>
              <AccInfoBtnSave
                disable={
                  newnick === "" || newkey === "" || pass === "" || conf === ""
                    ? true
                    : false
                }
                onClick={handleSubmit}
                type="submit"
              >
                Save
              </AccInfoBtnSave>
            </AccInfoBtnWrapper>
          </AccInfoContainer>
        </AccContainer>
      </AccWrapper>
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

export default Account;

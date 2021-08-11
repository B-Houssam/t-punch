import React, { useState, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import img from "../../images/svg-7.svg";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  FormInput,
  Form,
  FormH1,
  FormButton,
  Img,
  FormLabel,
  Txt,
  OutWrap,
} from "./signupElements";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    }).then((res) => res.json());

    if (res.status === true) {
      localStorage.setItem("token", res.token);
      setRedirect(true);
    } else {
      toast.error("Login failed!", {
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

  if (redirect) {
    return <Redirect to="/explore" />;
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">TECH_PUNCH</Icon>
          <OutWrap>
            <Txt>START BOOSTING YOUR BUSINESS</Txt>
            <Img src={img}></Img>
            <FormContent>
              <Form onSubmit={handleSubmit}>
                <FormH1>SIGN IN TO YOUR ACCOUNT</FormH1>
                <FormLabel htmlFor="for">KEY</FormLabel>
                <FormInput
                  type="text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                ></FormInput>
                <FormLabel htmlFor="for">PASSWORD</FormLabel>
                <FormInput
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                ></FormInput>
                <FormButton type="submit">CONTINUE</FormButton>
              </Form>
            </FormContent>
          </OutWrap>
        </FormWrap>
      </Container>
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

export default SignUp;

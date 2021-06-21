import React from "react";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  FormInput,
  Form,
  FormH1,
  FormButton,
  FormLabel,
  Text,
  Txt,
  OutWrap,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">TECH_PUNCH</Icon>

          <OutWrap>
            <Txt>GET BACK TO YOUR BUSINESS</Txt>
            <FormContent>
              <Form action="#">
                <FormH1>SIGN IN TO YOUR ACCOUNT</FormH1>
                <FormLabel htmlFor="for">EMAIL</FormLabel>
                <FormInput type="email" required></FormInput>
                <FormLabel htmlFor="for">PASSWORD</FormLabel>
                <FormInput type="password" required></FormInput>
                <FormButton type="submit" to="/dashboard">
                  CONTINUE
                </FormButton>
                <Text>FORGOT PASSWORD</Text>
              </Form>
            </FormContent>
          </OutWrap>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

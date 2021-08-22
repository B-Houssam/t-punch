import React from "react";
import {
  MessageContainer,
  MessageWrapper,
  MessageRow,
  Avatar,
  Title,
  Body,
  Cred,
  Del,
  PagesRow,
} from "./MsElements";

import img from "../../../../images/svg-11.svg";
import { AiFillDelete } from "react-icons/ai";

const Messages = () => {
  return (
    <>
      <MessageContainer>
        <PagesRow>
          <div>Prev</div>
          <div>Page 1</div>
          <div>Next</div>
        </PagesRow>
        <MessageWrapper>
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "align-items": "flex-start",
              "justify-content": "fcenter",
            }}
          >
            <div
              style={{
                display: "flex",
                "flex-direction": "row",
                "align-items": "flex-start",
                "justify-content": "fcenter",
                "margin-bottom": "30px",
              }}
            >
              <Avatar src={img} alt="profilPic"></Avatar>
              <Title>New Offer</Title>
            </div>
            <MessageRow>
              <Body>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                sequi reiciendis voluptas, minus vero, esse nostrum aut
                voluptatibus dolor, omnis molestias obcaecati cumque possimus
                quaerat numquam reprehenderit explicabo voluptates ipsam.
              </Body>
            </MessageRow>
            <Cred>12-08-2021</Cred>
          </div>
          <Del>
            <AiFillDelete color="white" size="20px"></AiFillDelete>
          </Del>
        </MessageWrapper>
        <MessageWrapper>
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "align-items": "flex-start",
              "justify-content": "fcenter",
            }}
          >
            <div
              style={{
                display: "flex",
                "flex-direction": "row",
                "align-items": "flex-start",
                "justify-content": "fcenter",
                "margin-bottom": "30px",
              }}
            >
              <Avatar src={img} alt="profilPic"></Avatar>
              <Title>Admin Alert</Title>
            </div>
            <MessageRow>
              <Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid distinctio illo, esse magnam fuga tenetur dolorem nam,
                similique vel necessitatibus qui fugiat quasi dicta, dolor porro
                est quis consequatur et.
              </Body>
            </MessageRow>
            <Cred>12-08-2021</Cred>
          </div>
          <Del>
            <AiFillDelete color="white" size="20px"></AiFillDelete>
          </Del>
        </MessageWrapper>
        <MessageWrapper>
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "align-items": "flex-start",
              "justify-content": "fcenter",
            }}
          >
            <div
              style={{
                display: "flex",
                "flex-direction": "row",
                "align-items": "flex-start",
                "justify-content": "fcenter",
                "margin-bottom": "30px",
              }}
            >
              <Avatar src={img} alt="profilPic"></Avatar>
              <Title>New Connection detected</Title>
            </div>
            <MessageRow>
              <Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                beatae quas perspiciatis suscipit numquam eaque minus tempore
                amet? Repellat rerum dolor suscipit nam nihil, tenetur quasi
                odit quis placeat quas.
              </Body>
            </MessageRow>
            <Cred>12-08-2021</Cred>
          </div>
          <Del>
            <AiFillDelete color="white" size="20px"></AiFillDelete>
          </Del>
        </MessageWrapper>
        <MessageWrapper>
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "align-items": "flex-start",
              "justify-content": "fcenter",
            }}
          >
            <div
              style={{
                display: "flex",
                "flex-direction": "row",
                "align-items": "flex-start",
                "justify-content": "fcenter",
                "margin-bottom": "30px",
              }}
            >
              <Avatar src={img} alt="profilPic"></Avatar>
              <Title>Welcome</Title>
            </div>
            <MessageRow>
              <Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid distinctio illo, esse magnam fuga tenetur dolorem nam,
                similique vel necessitatibus qui fugiat quasi dicta, dolor porro
                est quis consequatur et.
              </Body>
            </MessageRow>
            <Cred>12-08-2021</Cred>
          </div>
          <Del>
            <AiFillDelete color="white" size="20px"></AiFillDelete>
          </Del>
        </MessageWrapper>
      </MessageContainer>
    </>
  );
};

export default Messages;

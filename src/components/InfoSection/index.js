import React from "react";
import {
  InfoWrapper,
  InfoContainer,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Sub,
  BtnWrap,
  Img,
  ImgWrap,
} from "./infoElements";
import { Button } from "../ButtonElemnt";

const InfoSection = ({
  id,
  imgstart,
  topLine,
  lightText,
  darkText,
  headline,
  description,
  alt,
  size,
  img,
  btn,
  lightBg,
  displayed,
  buttonLable,
  primary,
  dark,
  //dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgstart={imgstart}>
            <Column1>
              <TextWrapper>
                <TopLine displayed={displayed}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Sub darkText={darkText}>{description}</Sub>
                <BtnWrap btn={btn}>
                  <Button>{buttonLable}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} size={size} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

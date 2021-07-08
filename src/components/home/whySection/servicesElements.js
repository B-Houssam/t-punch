import styled from "styled-components";
//import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const ServicesContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #096192;

  @media screen and (max-width: 480px) {
    height: 1300px;
  }

  @media screen and (max-width: 1000px) {
    height: 1100px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1500px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 21px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  tansition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 75px;
  color: #fff;
  margin-bottom: 64px;

  font-family: "Oswald", sans-serif;

  @media screen and (max-width: 1000px) {
    font-size: 48px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 0.9rem;
  margin-bottom: 10px;
  font-family: "Open Sans", sans-serif;
`;

export const ServicesP = styled.p`
  font-size: 0.9rem;
  text-align: center;
  font-family: "Open Sans", sans-serif;
`;

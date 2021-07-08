import styled from "styled-components";

export const WelcomeBar = styled.div`
  height: 100px;
  background: #fff;
  position: sticky;
  top: 0;
`;
export const WelcomeBarWrapper = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const WelcomeText = styled.h1`
  font-size: 48;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  color: #096192;
`;
export const WelcomeSubText = styled.p`
  //font-size: 21;
  //font-family: "Open Sans", sans-serif;
  color: #096192;
  font-family: "Oswald", sans-serif;
`;
export const WelcomeContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Circle = styled.div`
  height: 40px;
  width: 40px;
  background: #f3f4ed;
  border-radius: 50px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 2px;
  background: #f3f4ed;
  height: 35px;
  margin-left: 20px;
`;

export const Menu = styled.div`
  margin-left: 20px;
`;

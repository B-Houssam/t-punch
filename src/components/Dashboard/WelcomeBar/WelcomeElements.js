import styled from "styled-components";

export const WelcomeBar = styled.div`
  height: 100px;
  background: #fff;
  position: sticky;
  z-index: 9999;
  top: 0px;
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
  text-transform: uppercase;
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

export const CircleSearch = styled.div`
  height: 40px;
  width: 40px;
  background: #f3f4ed;
  border-radius: 50px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: width 0.75s cubic-bezier(0, 0.795, 0, 1);
`;

export const Line = styled.div`
  width: 2px;
  background: #f3f4ed;
  height: 35px;
  margin-left: 20px;
`;

export const Menu = styled.div`
  margin-left: 10px;
  width: 50px;
  height: 40px;
  //padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #096192;
  color: #fff;
  &:hover {
    //transition: all 0.2s ease-in-out;
    background: #da0037;
  }
  cursor: pointer;
`;

export const MenuTxt = styled.p`
  font-family: "Open Sans", sans-serif;
`;

export const MenuIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/*
export const PhWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
`;

export const MenuPh = styled.img``;
*/

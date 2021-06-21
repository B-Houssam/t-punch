import styled from "styled-components";

export const Logo = styled.h1`
  font-family: "Oswald", sans-serif;
  margin-bottom: 10px;
  color: #053742;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  //text-shadow: 3px 3px #053742;
`;

export const UpperLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 30px;
`;

export const SideBar = styled.div`
  flex: 1;
  position: sticky;
  background: #096192;
  top: 0;
  height: 100vh;
`;
export const SideBarWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const SideBarMenu = styled.div`
  padding: 20px;
`;
export const SideBarTitle = styled.div`
  font-family: "Oswald", sans-serif;
  margin-bottom: 10px;
  font-size: 18px;
  color: #dcdcdc;
`;
export const SideBarList = styled.ul`
  list-style: none;
`;
export const SideBarListItem = styled.li`
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: center;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px;
  &:hover,
  &.active {
    background: #053742;
  }
`;

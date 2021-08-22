import styled from "styled-components";

export const MessageContainer = styled.div`
  margin: 30px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 10px 20px 10px 20px;
`;
export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  padding: 20px;
`;
export const MessageRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  //padding: 0px 50px 0px 50px;
`;
export const Avatar = styled.img`
  height: 35px;
  width: 35px;
  background: white;
  border-radius: 50px;
  margin-right: 10px;
`;
export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: 24px;
  //color: #dcdcdc;
  margin-right: 10px;
`;
export const Body = styled.p`
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  //font-weight: bold;
  //color: #dcdcdc;
  margin-bottom: 10px;
`;
export const Cred = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: 14px;
  color: grey;
`;
export const Del = styled.div`
  height: 50px;
  width: 50px;
  cursor: pointer;
  border-radius: 5px;
  background: #096192;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #da0037;
    color: #fff;
  }
`;
export const PagesRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #096192;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  margin-bottom: 40px;
  padding: 0px 20px 0px 20px;
  opacity: 0.6;
`;

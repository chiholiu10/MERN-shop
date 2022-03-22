import styled from "styled-components";

export const NavigationBar = styled.nav`
  border: 1px solid red;
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: black;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  span {
    color: red;
    text-align: left;
  }
`;
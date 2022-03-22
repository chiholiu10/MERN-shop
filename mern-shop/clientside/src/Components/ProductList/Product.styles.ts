import styled from "styled-components";
import { breakpoint } from "../../Styles/BreakPoint";

export const ProductBlock = styled.div`
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductBlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 100%;
  ${breakpoint.md`
      max-width: 33%;
  `}
  img {
    width: 150px;
    margin-bottom: 0;
  }
  button {
    border: 1px solid black;
    margin-top: auto;
    width: 200px;
  }
`;

export const ProductBlockInfo = styled.div`
  flex-grow: 1;
`;
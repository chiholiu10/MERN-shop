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
    border: 1px solid red;
  }
  button {
    border: 1px solid red;
    margin-top: auto;
  }
`;

export const ProductBlockInfo = styled.div`
  flex-grow: 1;
`;
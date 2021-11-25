import styled from "styled-components";
import { breakpoint } from "./BreakPoint";
import theme from "./Theme";

export const Table = styled.table`
  border: 1px solid black;
  width: 100%;
`;

export const Tr = styled.tr`
  padding: 0;
`;

export const Th = styled.th`
  padding: 10px;
  width: 200px;
  text-align: left;
  border-bottom: 1px solid ${theme.colors.black};
`;

export const Td = styled.td`
  padding: 10px;
  height: 50px;
  border-bottom: 1px solid ${theme.colors.black};
`;

export const TableColumns = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint.md`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const Theader = styled.thead``;
export const Tbody = styled.tbody``;

export const TableBlock = styled.div`
  width: 100%;
  ${breakpoint.md`
    width: 50%;
  `}
`;

export const Label = styled.label`
  font-size: 14px;
  text-transform: capitalize;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
export const InputSelect = styled.select`
  appearance: none;
  margin: 30px 0;
  outline: none;
  border: none;
  min-width: 200px;
  font-size: 14px;
  font-weight: ${theme.fontWeights.extremeBold};
  background-color: ${theme.colors.transparent};
  border-bottom: 2px solid ${theme.colors.grey};
  ${breakpoint.md`
    padding: 6px 0 2px;
    margin: initial;
  `}
`;

export const MainComponent = styled.div`
  padding: 50px 0;
  background-color: ${theme.colors.lightgrey};
`;

export const InnerComponent = styled.div`
  max-width: 900px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;
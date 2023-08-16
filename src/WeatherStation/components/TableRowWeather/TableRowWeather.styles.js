import styled from "styled-components";
import theme from "../../../assets/theme";

const ContainerRow = styled.div``;

const ContainerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const BodyTable = styled.tbody``;

const CellContainer = styled.tr`
  width: 100%;
  height: 71px;

  opacity: 1;
  border-bottom: 1px solid ${theme.main.darkWhite};

  &:hover {
    cursor: pointer;
    background-color: ${theme.main.orange};
  }
`;

const TableData = styled.td`
  font-family: "DM Sans", sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: ${theme.main.darkGrey};
  letter-spacing: 0;
  line-height: 21px;
  width: 30%;
  padding: 0px 20px;
`;

const TableDataRight = styled.td`
  font-family: "DM Sans", sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: ${theme.main.darkGrey};
  letter-spacing: 0;
  line-height: 21px;
  text-align: right;
  width: 16.66%;
  padding: 0px 38px;
`;

const StyledComponents = {
  ContainerRow,
  ContainerTable,
  BodyTable,
  CellContainer,
  TableData,
  TableDataRight,
};

export default StyledComponents;

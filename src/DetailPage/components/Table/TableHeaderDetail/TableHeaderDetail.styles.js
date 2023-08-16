import styled from "styled-components";
import theme from "../../../../assets/theme";

const ContainerHeader = styled.table`
  width: 100%;
  border-bottom: 1px solid ${theme.secondary.orange};
  table-layout: fixed;
`;

const TheadContainer = styled.thead``;

const RowContainer = styled.tr``;

const CellContainer = styled.th`
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: ${theme.main.blue};
  letter-spacing: 0;
  line-height: 24px;
  text-align: left;
  width: 33.33%;
`;

const CellContainerCenter = styled.th`
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: ${theme.main.blue};
  letter-spacing: 0;
  line-height: 24px;
  text-align: left;
  width: 33.33%;
  text-align: center;
  padding-right: 20px;
`;

const TableHeaderWeatherStyles = {
  ContainerHeader,
  TheadContainer,
  RowContainer,
  CellContainer,
  CellContainerCenter
};

export default TableHeaderWeatherStyles;

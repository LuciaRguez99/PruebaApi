import styled from "styled-components";
import theme from "../../../assets/theme";

const ContainerHeader = styled.table`
  width: 100%;
  border-bottom: 1px solid ${theme.main.yellow};
  table-layout: fixed;
`;

const TheadContainer = styled.thead``;

const RowContainer = styled.tr``;

const CellContainerLeft = styled.th`
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: ${theme.main.blue};
  letter-spacing: 0;
  line-height: 24px;
  text-align: left;
  width: 30%;
  padding: 0px 20px 5px 20px;
`;

const CellContainerRight = styled.th`
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: ${theme.main.blue};
  letter-spacing: 0;
  line-height: 24px;
  text-align: right;
  width: 18%;
  padding: 0px 30px 5px 30px;
`;

const Image = styled.img`
  cursor: pointer;
  vertical-align: middle;
`;

const TableHeaderWeatherStyles = {
  ContainerHeader,
  TheadContainer,
  RowContainer,
  CellContainerLeft,
  CellContainerRight,
  Image,
};

export default TableHeaderWeatherStyles;

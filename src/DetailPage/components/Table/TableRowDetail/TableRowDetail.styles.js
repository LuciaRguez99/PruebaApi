import styled from "styled-components";
import theme from "../../../../assets/theme";

const Container = styled.div`
  margin-bottom: 20px;
`;

const ContainerRow = styled.div``;

const ScrollBar = styled.div`
  max-height: 600px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.main.grey};
    height: 141px;
  }
`;

const ContainerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const BodyTable = styled.tbody``;

const CellContainer = styled.tr`
  width: 100%;
  height: 71px;

  opacity: 1;
  border-bottom: 1px solid ${theme.main.darkWhite};
`;

const TableData = styled.td`
  font-family: "DM Sans", sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: ${theme.main.darkGrey};
  letter-spacing: 0;
  line-height: 21px;
  width: 33.33%;
`;

const TableDataCenter = styled.td`
  font-family: "DM Sans", sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: ${theme.main.darkGrey};
  letter-spacing: 0;
  line-height: 21px;
  width: 33.33%;
  text-align: center;
`;

const StyledComponents = {
  Container,
  ContainerRow,
  ScrollBar,
  ContainerTable,
  BodyTable,
  CellContainer,
  TableData,
  TableDataCenter
};

export default StyledComponents;

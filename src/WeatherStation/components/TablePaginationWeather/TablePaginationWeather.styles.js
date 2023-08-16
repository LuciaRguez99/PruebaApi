import styled from "styled-components";
import theme from "../../../assets/theme";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PaginationList = styled.ul`
  width: 348px;
  height: 25px;
  opacity: 1;
  list-style: none;
  display: flex;
  gap: 10px;
`;

const PaginationItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${theme.main.darkGrey};
  background-color: ${(props) =>
    props.$isactive === "true" ? theme.main.yellow : "transparent"};
  border-radius: 50%;
  font-size: 16px;
  padding: 5px;

  &:hover {
    background-color: ${(props) =>
      props.$isactive === "true"
        ? theme.main.yellow
        : props.$isarrow
        ? theme.main.grey
        : theme.main.lightGrey};
  }
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
`;

const StyledComponents = {
  PaginationContainer,
  PaginationList,
  PaginationItem,
  Image,
};

export default StyledComponents;

import styled from "styled-components";
import theme from "../../../assets/theme";

const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  opacity: 1;
  color: ${theme.secondary.orange};
  background-color: ${theme.main.white};
  border: none;
  cursor: pointer;
  font-family: "DM Sans", sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const StyledComponents = {
  ButtonBack,
  Icon,
};

export default StyledComponents;

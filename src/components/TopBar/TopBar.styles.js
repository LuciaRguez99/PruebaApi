import styled from "styled-components";
import theme from "../../assets/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${theme.main.yellow};
`;

const Image = styled.img`
  margin: 16px 0px;
`;

const TopBarStyles = {
  Container,
  Image,
};

export default TopBarStyles;

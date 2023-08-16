import styled from "styled-components";
import theme from "../../../assets/theme";

const Container = styled.div``;

const HeaderContainer = styled.div`
  background-color: ${theme.secondary.orange};
  width: 100%;
  height: 120px;
`;

const MunicipalityContainer = styled.div`
  height: 31px;
  text-align: left;
  font: normal normal normal 24px/63px DM Sans;
  letter-spacing: 0px;
  color: ${theme.main.white};
  margin-left: 35px;
`;

const StationContainer = styled.div`
  text-align: left;
  font: normal normal bold 48px/63px DM Sans;
  letter-spacing: 0px;
  color: ${theme.main.white};
  margin-left: 35px;
  margin-top: 25px;
`;

const StyledComponents = {
  Container,
  HeaderContainer,
  MunicipalityContainer,
  StationContainer,
};

export default StyledComponents;

import styled from "styled-components";
import images from "../assets/images";
import theme from "../assets/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 17.5%;
  display: flex;
  z-index: -1;
`;

const ImageSun = styled.div`
  width: 273px;
  height: 269px;
  margin: 0 auto;

  background: transparent url(${images.sun}) 0% 0% no-repeat padding-box;
  background-size: cover;
`;

const ContentContainer = styled.div`
  width: 65%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  margin-top: 5px;
`;

const Title = styled.div`
  position: absolute;
  top: 90px;

  text-align: left;
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  font-size: 48px;
  line-height: 63px;
  letter-spacing: 0px;
  color: ${theme.main.blue};
  opacity: 1;
`;

const MunicipalityHeader = styled.div`
  margin-top: 115px;
`;

const ContainerTable = styled.div`
  width: 100%;
  opacity: 1;
`;

const HeaderContainer = styled.div`
  margin-top: 20px;
`;

const RowContainer = styled.div``;

const ImageCloud = styled.div`
  position: absolute;
  width: 271px;
  height: 330px;
  bottom: 0px;

  background: transparent url(${images.cloud}) 0% 0% no-repeat padding-box;
  background-size: cover;
`;

const StyledComponents = {
  Container,
  ImageContainer,
  ImageSun,
  ContentContainer,
  ButtonContainer,
  Title,
  MunicipalityHeader,
  ContainerTable,
  HeaderContainer,
  RowContainer,
  ImageCloud,
};

export default StyledComponents;

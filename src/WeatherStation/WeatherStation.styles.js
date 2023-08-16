import styled from "styled-components";
import theme from "../assets/theme";
import images from "../assets/images";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 17.5%;
  diplay: flex;
  z-index: -1;
`;

const ImageCloud = styled.div`
  width: 271px;
  height: 330px;
  margin: 0 auto;

  background: transparent url(${images.cloud}) 0% 0% no-repeat padding-box;
  background-size: cover;
`;

const ContentContainer = styled.div`
  width: 65%;
`;

const Title = styled.div`
  position: absolute;
  margin-top: 50px;
  width: 388px;

  text-align: left;
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  font-size: 48px;
  line-height: 63px;
  letter-spacing: 0px;
  color: ${theme.main.blue};
  opacity: 1;
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 150px;
`;

const ContainerTable = styled.div`
  width: 100%;
  margin-top: 30px;

  opacity: 1;
`;

const HeaderContainer = styled.div``;

const RowContainer = styled.div``;

const PaginationContainer = styled.div``;

const ImageSun = styled.div`
  position: absolute;
  width: 273px;
  height: 269px;
  bottom: 0px;

  background: transparent url(${images.sun}) 0% 0% no-repeat padding-box;
  background-size: cover;

`;

const StyledComponents = {
  Container,
  ImageContainer,
  ImageCloud,
  ContentContainer,
  Title,
  SearchBarContainer,
  ContainerTable,
  HeaderContainer,
  RowContainer,
  PaginationContainer,
  ImageSun,
};

export default StyledComponents;

import React from "react";
import Styled from "./DetailPage.styles";
import ButtonBack from "./components/ButtonBack/ButtonBack";
import Header from "./components/Header/Header";
import TableHeaderDetail from "./components/Table/TableHeaderDetail/TableHeaderDetail";
import TableRowDetails from "./components/Table/TableRowDetail/TableRowDetail";

function DetailPage() {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.ImageSun />
      </Styled.ImageContainer>
      <Styled.ContentContainer>
        <Styled.ButtonContainer>
          <ButtonBack />
        </Styled.ButtonContainer>
        <Styled.Title>Datos diarios</Styled.Title>
        <Styled.MunicipalityHeader>
          <Header />
        </Styled.MunicipalityHeader>
        <Styled.ContainerTable>
          <Styled.HeaderContainer>
            <TableHeaderDetail />
          </Styled.HeaderContainer>
          <Styled.RowContainer>
            <TableRowDetails />
          </Styled.RowContainer>
        </Styled.ContainerTable>
      </Styled.ContentContainer>
      <Styled.ImageContainer>
        <Styled.ImageCloud />
      </Styled.ImageContainer>
    </Styled.Container>
  );
}

export default DetailPage;

import React from "react";
import Styled from "./TableHeaderDetail.styles";

function TableHeaderWeather() {
  return (
    <Styled.ContainerHeader>
      <Styled.TheadContainer>
        <Styled.RowContainer>
          <Styled.CellContainer>Nome parámetro</Styled.CellContainer>
          <Styled.CellContainerCenter>Unidade</Styled.CellContainerCenter>
          <Styled.CellContainerCenter>Valor</Styled.CellContainerCenter>
        </Styled.RowContainer>
      </Styled.TheadContainer>
    </Styled.ContainerHeader>
  );
}

export default TableHeaderWeather;

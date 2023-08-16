import React, { useState } from "react";
import Styled from "./TableHeaderWeather.styles";
import images from "../../../assets/images";

function TableHeaderWeather({
  orderByField,
  orderDirection,
  setOrderDirection,
  setOrderByField,
}) {
  // Estado para controlar la dirección de la flecha
  const [arrowActive, setArrowActive] = useState({
    nombre: false,
    provincia: false,
    concello: false,
    altitude: false,
    latitude: false,
    lonxitude: false,
  });

  // Función apra cambiar la dirección de la flecha
  const toggleArrow = (field) => {
    setOrderDirection((prevDirection) =>
      field === orderByField ? (prevDirection === "desc" ? "asc" : "desc") : "desc"
    );

    setOrderByField(field);

    setArrowActive((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  
  // Función apra obtener el estilo
  const getArrowStyle = (field) => ({
    transform: arrowActive[field] ? "rotate(180deg)" : "rotate(0deg)",
  });

  return (
    <Styled.ContainerHeader>
      <Styled.TheadContainer>
        <Styled.RowContainer>
          <Styled.CellContainerLeft>
            Nombre de estación
            <Styled.Image
              src={images.arrow}
              alt="Arrow"
              style={getArrowStyle("name")}
              onClick={() => toggleArrow("name")}
            />
          </Styled.CellContainerLeft>

          <Styled.CellContainerLeft>
            Provincia
            <Styled.Image
              src={images.arrow}
              alt="Arrow"
              style={getArrowStyle("province")}
              onClick={() => toggleArrow("province")}
            />
          </Styled.CellContainerLeft>
          <Styled.CellContainerLeft>
            Concello
            <Styled.Image
              src={images.arrow}
              alt="Arrow"
              style={getArrowStyle("municipality")}
              onClick={() => toggleArrow("municipality")}
            />
          </Styled.CellContainerLeft>
          <Styled.CellContainerRight>
            Altitude
            <Styled.Image
              src={images.arrow}
              alt="Arrow"
              style={getArrowStyle("altitude")}
              onClick={() => toggleArrow("altitude")}
            />
          </Styled.CellContainerRight>
          <Styled.CellContainerRight>
            Latitude
            <Styled.Image
              src={images.arrow}
              alt="Arrow"
              style={getArrowStyle("latitude")}
              onClick={() => toggleArrow("latitude")}
            />
          </Styled.CellContainerRight>
          <Styled.CellContainerRight>
            Lonxitude
            <Styled.Image
              src={images.arrow}
              alt="Arrow"
              style={getArrowStyle("longitude")}
              onClick={() => toggleArrow("longitude")}
            />
          </Styled.CellContainerRight>
        </Styled.RowContainer>
      </Styled.TheadContainer>
    </Styled.ContainerHeader>
  );
}

export default TableHeaderWeather;

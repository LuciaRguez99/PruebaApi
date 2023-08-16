import React from "react";
import Styled from "./Header.styles";
import useWeatherData from "../../../hooks/useWeatherData";
import { useParams } from "react-router-dom";

function Header() {
  // Obtener el "id" de la URL
  const { id } = useParams();
  // Obtener los datos de las estaciones con el uso del hook
  const { stationData } = useWeatherData();
  // Encontrar la estación selecciona
  const selectedStation = stationData.find(
    (station) => station.properties.id === id
  );

  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.MunicipalityContainer>
          {selectedStation
            ? selectedStation.properties.municipality
            : "Cargando..."}
        </Styled.MunicipalityContainer>
        <Styled.StationContainer>
          {selectedStation ? selectedStation.properties.name : "Cargando..."}
        </Styled.StationContainer>
      </Styled.HeaderContainer>
    </Styled.Container>
  );
}

export default Header;

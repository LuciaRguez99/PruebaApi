import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import TableHeaderWeather from "./components/TableHeaderWeather/TableHeaderWeather";
import TableRowWeather from "./components/TableRowWeather/TableRowWeather";
import TablePaginationWeather from "./components/TablePaginationWeather/TablePaginationWeather";
import Styled from "./WeatherStation.styles";
import useWeatherData from "../hooks/useWeatherData";

function WeatherStation() {
  // Obtener los datos de las estaciones mediante el hook
  const { stationData } = useWeatherData();
  // Estados para la paginación, la búsqueda y para ordenar
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [orderByField, setOrderByField] = useState("");
  const [orderDirection, setOrderDirection] = useState("asc");
  const recordsPerPage = 8;

  // Filtrar los datos según la búsqueda
  const filteredData = stationData.filter((station) => {
    return (
      station.properties.name
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      station.properties.province
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      station.properties.municipality
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
  });

  // Calcular el número de páginas
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;

  // Función para el cambio de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Función apra la búsqueda
  const handleSearch = (value) => {
    setSearchValue(value);
    setCurrentPage(1);
  };

  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.ImageCloud />
      </Styled.ImageContainer>
      <Styled.ContentContainer>
        <Styled.Title>Estacións meteorolóxicas</Styled.Title>
        <Styled.SearchBarContainer>
          <SearchBar onSearch={handleSearch} />
        </Styled.SearchBarContainer>
        <Styled.ContainerTable>
          <Styled.HeaderContainer>
            <TableHeaderWeather
              orderByField={orderByField}
              orderDirection={orderDirection}
              setOrderByField={setOrderByField}
              setOrderDirection={setOrderDirection}
            />
          </Styled.HeaderContainer>

          <Styled.RowContainer>
            <TableRowWeather
              startIndex={startIndex}
              endIndex={endIndex}
              searchValue={searchValue}
              orderByField={orderByField}
              orderDirection={orderDirection}
            />
          </Styled.RowContainer>
          <Styled.PaginationContainer>
            <TablePaginationWeather
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Styled.PaginationContainer>
        </Styled.ContainerTable>
      </Styled.ContentContainer>
      <Styled.ImageContainer>
        <Styled.ImageSun />
      </Styled.ImageContainer>
    </Styled.Container>
  );
}

export default WeatherStation;

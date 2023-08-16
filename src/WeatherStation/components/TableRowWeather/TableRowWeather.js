import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWeatherData from "../../../hooks/useWeatherData";
import Styled from "./TableRowWeather.styles";

function TableRowWeather({
  startIndex,
  endIndex,
  searchValue,
  orderByField,
  orderDirection,
}) {
  // Estados para la carga y los datos
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  // Obetener los datos de las estaciones mediante el hook
  const { stationData } = useWeatherData();
  // Obtener la función de navegacción
  const navigate = useNavigate();

  // Controlar la carga inicial
  useEffect(() => {
    if (stationData.length > 0) {
      setLoading(false);
    }
  }, [stationData]);

  // Filtrar y ordenar los datos
  useEffect(() => {
    // Filtrar los datos según la búsqueda
    const filtered = stationData.filter((station) => {
      return (
        (station.properties.name &&
          station.properties.name
            .toLowerCase()
            .includes(searchValue.toLowerCase())) ||
        (station.properties.province &&
          station.properties.province
            .toLowerCase()
            .includes(searchValue.toLowerCase())) ||
        (station.properties.municipality &&
          station.properties.municipality
            .toLowerCase()
            .includes(searchValue.toLowerCase())) ||
        station.geometry.altitude?.toString().includes(searchValue) ||
        station.geometry.coordinates[1]?.toString().includes(searchValue) ||
        station.geometry.coordinates[0]?.toString().includes(searchValue)
      );
    });

    // Ordenar los datos
    const sorted = filtered.slice().sort((a, b) => {
      const orderByFieldValueA =
        a.properties[orderByField] !== undefined
          ? a.properties[orderByField]
          : 0;
      const orderByFieldValueB =
        b.properties[orderByField] !== undefined
          ? b.properties[orderByField]
          : 0;

      if (orderByField === "latitude" || orderByField === "longitude") {
        if (orderDirection === "asc") {
          return (
            a.geometry.coordinates[orderByField === "latitude" ? 1 : 0] -
            b.geometry.coordinates[orderByField === "latitude" ? 1 : 0]
          );
        } else {
          return (
            b.geometry.coordinates[orderByField === "latitude" ? 1 : 0] -
            a.geometry.coordinates[orderByField === "latitude" ? 1 : 0]
          );
        }
      } else if (
        typeof orderByFieldValueA === "string" &&
        typeof orderByFieldValueB === "string"
      ) {
        if (orderDirection === "asc") {
          return orderByFieldValueA.localeCompare(orderByFieldValueB);
        } else {
          return orderByFieldValueB.localeCompare(orderByFieldValueA);
        }
      } else if (
        typeof orderByFieldValueA === "number" &&
        typeof orderByFieldValueB === "number"
      ) {
        if (orderDirection === "asc") {
          return orderByFieldValueA - orderByFieldValueB;
        } else {
          return orderByFieldValueB - orderByFieldValueA;
        }
      }

      return 0;
    });

    // Almacenar los datos
    setFilteredData(sorted);
  }, [stationData, searchValue, orderByField, orderDirection]);

  // Función para navegar a la página de detalles
  const navigateToDetail = (id) => {
    navigate(`/weatherstation/${id}`);
  };

  return (
    <Styled.ContainerRow>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <Styled.ContainerTable>
          <Styled.BodyTable>
            {filteredData.slice(startIndex, endIndex).map((station) => (
              <Styled.CellContainer
                key={station.properties.id}
                onClick={() => navigateToDetail(station.properties.id)}
              >
                <Styled.TableData>
                  {station.properties.name || "-"}
                </Styled.TableData>

                <Styled.TableData>
                  {station.properties.province || "-"}
                </Styled.TableData>

                <Styled.TableData>
                  {station.properties.municipality || "-"}
                </Styled.TableData>

                <Styled.TableDataRight>
                  {station.geometry.altitude || "-"}
                </Styled.TableDataRight>

                <Styled.TableDataRight>
                  {station.geometry.coordinates[1] || "-"}
                </Styled.TableDataRight>

                <Styled.TableDataRight>
                  {station.geometry.coordinates[0] || "-"}
                </Styled.TableDataRight>
              </Styled.CellContainer>
            ))}
          </Styled.BodyTable>
        </Styled.ContainerTable>
      )}
    </Styled.ContainerRow>
  );
}

export default TableRowWeather;

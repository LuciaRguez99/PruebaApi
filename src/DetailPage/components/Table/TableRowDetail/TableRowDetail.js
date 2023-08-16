import React, { useEffect } from "react";
import useWeatherData from "../../../../hooks/useWeatherData";
import Styled from "./TableRowDetail.styles";
import { useParams } from "react-router-dom";

function TableRowDetail() {
  // Obtener el "id" de la URL
  const { id } = useParams();
  // Obetener funciones y datos con el hook
  const { fetchForecastData, forecastData } = useWeatherData();

  // Traducción de las variables
  const variableTranslations = {
    temperature: "Temperatura",
    wind: "Vento",
    precipitation_amount: "Cantidade de precipitación",
    deg: "º",
    degc: "ºC",
    lm2: "l/m2",
    kmh: "km/h",
  };

  // Cargar los datos cuando cambia el id
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchForecastData(id);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchData();
  }, [id, fetchForecastData]);

  return (
    <Styled.Container>
      <Styled.ContainerRow>
        <Styled.ScrollBar>
          {forecastData.length === 0 ? (
            <p>Cargando...</p>
          ) : (
            forecastData.map((forecast) => (
              <Styled.ContainerTable key={id}>
                {forecast.days
                  ? forecast.days.map((day) => (
                      <Styled.BodyTable key={day.timePeriod.begin.timeInstant}>
                        {day.variables
                          ? day.variables.map((variable) => (
                              <Styled.CellContainer
                                key={`${forecast.id}_${day.timePeriod.begin.timeInstant}_${variable.name}`}
                              >
                                <Styled.TableData>
                                  {variableTranslations[variable.name] || "-"}
                                </Styled.TableData>
                                <Styled.TableDataCenter>
                                  {variableTranslations[variable.name] ===
                                  "Vento"
                                    ? variableTranslations[
                                        variable.moduleUnits
                                      ] || "-"
                                    : variableTranslations[variable.units] ||
                                      "-"}
                                </Styled.TableDataCenter>
                                <Styled.TableDataCenter>
                                  {variableTranslations[variable.name] ===
                                  "Vento"
                                    ? variable.moduleValue || "0"
                                    : variable.latestValue || "0"}
                                </Styled.TableDataCenter>
                              </Styled.CellContainer>
                            ))
                          : null}
                      </Styled.BodyTable>
                    ))
                  : null}
              </Styled.ContainerTable>
            ))
          )}
        </Styled.ScrollBar>
      </Styled.ContainerRow>
    </Styled.Container>
  );
}

export default TableRowDetail;

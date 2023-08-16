import { useState, useEffect } from "react";

function useWeatherData() {
  // Estado para almacenar los datos de las estaciones
  const [stationData, setStationData] = useState([]);
  // Estado para almacenar los datos de pronóstico
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    // Función fetchData para obtener los datos
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/proxy");
        const data = await response.json();
        setStationData(data.features);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // Función fetchForecastData para obtener los datos de pronóstico
  async function fetchForecastData(locationId) {
    try {
      const response = await fetch(
        `http://localhost:3001/forecast?locationIds=${locationId}&variables=temperature,wind,precipitation_amount`
      );
      const data = await response.json();

      // Limpia y transforma el código
      const cleanedData = cleanForecastData(data.features);

      setForecastData(cleanedData);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  }

  // Función para limpiar y transformar los datos
  function cleanForecastData(data) {
    const cleanedData = data.map((item) => {
      const days = item.properties?.days?.map((day) => {
        const variables = day.variables?.map((variable) => {
          const latestValue = variable.values[variable.values.length - 1];

          return {
            name: variable.name,
            units: variable.units,
            latestValue: latestValue.value,
            moduleUnits: variable.moduleUnits,
            moduleValue: latestValue.moduleValue,
          };
        });

        return {
          timePeriod: day.timePeriod,
          variables: variables,
        };
      });

      return {
        id: item.id,
        name: item.name,
        days: days,
      };
    });

    return cleanedData;
  }

  return { stationData, fetchForecastData, forecastData };
}

export default useWeatherData;

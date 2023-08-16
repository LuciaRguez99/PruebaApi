const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
const port = 3001;

// Clave de la API para acceder a las peticiones
const API_KEY =
  "y62fzKCL48VfR99P39DX1QN133YgI9M7758ZF9In51d3d6971142iyD3lR0dcxi0";

// Middleware CORS para pertimir peticiones desde otros dominios
app.use(cors());

// Ruta para los datos de las estaciones
app.get("/proxy", async (_, res) => {
  try {
    // Solicitud a la API externa
    const response = await fetch(
      `https://servizos.meteogalicia.gal/apiv4/findPlaces?location=gal&lang=gl&api_key=${API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).json({ error: "Error fetching data from API" });
  }
});

// Ruta para los datos del pronóstico
app.get("/forecast", async (req, res) => {
  try {
    const locationId = req.query.locationIds;
    // Solicitud a la API externa
    const response = await fetch(
      `https://servizos.meteogalicia.gal/apiv4/getNumericForecastInfo?locationIds=${locationId}&variables=temperature,wind,precipitation_amount&lang=gl&API_KEY=${API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching forecast data from API:", error);
    res.status(500).json({ error: "Error fetching forecast data from API" });
  }
});

// Iniciar el servidor y que aparezca en al consola el mensaje
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

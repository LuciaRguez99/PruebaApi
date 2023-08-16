import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa Routes en lugar de Switch
import WeatherStation from "../WeatherStation/WeatherStation";
import DetailPage from "../DetailPage/DetailPage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<WeatherStation />} />
        {/* Ruta para la vista de los detalles usando el id */}
        <Route path="/weatherstation/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

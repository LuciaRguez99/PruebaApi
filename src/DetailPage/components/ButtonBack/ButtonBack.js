import React from "react";
import { useNavigate } from "react-router-dom";
import Styled from "./ButtonBack.styles";
import images from "../../../assets/images";

function ButtonBack() {
  // Obtener la función de navegación
  const navigate = useNavigate();

  // Función que se ejecuta al hacer clic, para navegar a "/"
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Styled.ButtonBack onClick={handleNavigate}>
      <Styled.Icon src={images.arrowLeft} alt="Arrow" />
      Volver á lista
    </Styled.ButtonBack>
  );
}

export default ButtonBack;

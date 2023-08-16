import React, { useState } from "react";
import Styled from "./SearchBar.styles";
import images from "../../../assets/images";

function SearchBar({ onSearch }) {
  // Estado apra almacenar el valor que se busca
  const [searchValue, setSearchValue] = useState("");

  // Función para buscar
  const handleSearch = () => {
    onSearch(searchValue);
  };

  // Manejar la pulsación de "Enter"
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Styled.SearchContainer>
      <Styled.InputContainer>
        <Styled.SearchInput
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </Styled.InputContainer>
      <Styled.ImageContainer>
        <Styled.Image src={images.lens} alt="search" onClick={handleSearch} />
      </Styled.ImageContainer>
    </Styled.SearchContainer>
  );
}

export default SearchBar;

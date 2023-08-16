import styled from "styled-components";
import theme from "../../../assets/theme";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.main.lightGrey};
  border-radius: 4px;
  padding: 5px;

  opacity: 1;
`;

const InputContainer = styled.div``;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  font-size: 16px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

const Image = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const SearchBarStyles = {
  SearchContainer,
  InputContainer,
  SearchInput,
  ImageContainer,
  Image,
};

export default SearchBarStyles;

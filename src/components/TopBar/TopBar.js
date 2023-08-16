import React from "react";
import Styled from "./TopBar.styles";
import images from "../../assets/images";

function TopBar() {
  return (
    <Styled.Container>
      <Styled.Image src={images.logo} alt="sonsoles" />
    </Styled.Container>
  );
}

export default TopBar;

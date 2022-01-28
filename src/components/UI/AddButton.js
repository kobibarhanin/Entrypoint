import React from "react";
import styled from "styled-components";

const AddButtonWrapper = styled.div`
  margin: auto;
`;

const ClickableImage = styled.img`
  cursor: pointer;
`;

const AddButton = (props) => {

  return (
    <AddButtonWrapper>
      <ClickableImage
        src="new.png"
        alt="add new"
        onClick={props.onClick}
        height="100"
        width="100"
      />
    </AddButtonWrapper>
  );
};

export default AddButton;

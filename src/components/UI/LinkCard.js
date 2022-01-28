import React from 'react';
import styled from 'styled-components'


const LinkCardWrapper = styled.div`
   border-radius: 5px;
   margin: 0.5rem;
   padding: 0.5rem;
   text-align: center;
`

const LinkCard = (props) => {
  return <LinkCardWrapper>{props.children}</LinkCardWrapper>;
};

export default LinkCard;

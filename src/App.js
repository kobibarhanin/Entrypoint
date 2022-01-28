import styled from "styled-components";
import { useState } from "react";
import LinksList from "./components/Link/LinksList";
import { seedLinks } from "./utils/seed";

const Container = styled.div`
  margin: 5%;
`;

function App() {
  const links = seedLinks();
  const [storedLinks, setStoredLinks] = useState(links);

  return (
    <Container>
      <LinksList storedLinks={storedLinks} setStoredLinks={setStoredLinks}/>
    </Container>
  );
}

export default App;

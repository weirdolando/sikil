import styled from "styled-components";
import { useState } from "react";
import Header from "../Header/Header";
import ShoeIndex from "../ShoeIndex";

function App() {
  const [sortId, setSortId] = useState("newest");

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;

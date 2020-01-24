import React from "react";
import Weather from "./components/Weather";
import Geometry from "./components/Geometry";
import { AppContainer } from "./components/Styles";
function App() {
  return (
    <AppContainer>
      <Weather />
      <Geometry />
    </AppContainer>
  );
}

export default App;

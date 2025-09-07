import React from "react";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import RemoteFirst from "./components/Remote-first/RemoteFirst";
import Reviews from "./components/Reviews/Reviews";
import Enviroments from "./components/Enviroments/Enviroments";
import Brands from "./components/Brands/Brands";

function App() {
  return (
    <>
      <Hero />
      <Steps />
      <Enviroments />
      <RemoteFirst />
      <Reviews />
      <Brands />
    </>
  );
}

export default App;

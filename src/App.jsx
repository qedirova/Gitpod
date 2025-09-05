import React from "react";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import RemoteFirst from "./components/Remote-first/RemoteFirst";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
// import Enviroments from "./components/Enviroments/Enviroments";

function App() {
  return (
    <>
      <Hero />
      <Steps />
      {/* <Enviroments /> */}
      <RemoteFirst />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import Navebar from "./Component/Navebar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navebar />
      <Outlet></Outlet>
    </>
  );
}

export default App;

import React from "react";
import Nav from "./components/navbar.jsx";
import Form1 from "./components/form1.jsx";

function Homepage() {
  return (
    <div className="container-fluid whole-content">
      <Nav />
      <Form1 />
    </div>
  );
}

export default Homepage;

import "./App.css";
import React from "react";
import Menu from "./Menu.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div
      className="container"
      style={{
        padding: "10px",
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <div
        className="header"
        style={{
          height: "100px",
          width: "100%",
          border: "1px solid",
          display: "inline-flex",
          justifyContent: "space-between",
          height: "100px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid",
            width: "20%",
            alignSelf: "stretch",
          }}
        >
          <Menu mass1="mass1" />
        </div>
        <div
          style={{
            border: "1px solid",
            width: "20%",
            alignSelf: "stretch",
          }}
        >
          <Menu mass2="mass2" />
        </div>
      </div>
      <div
        className="content"
        style={{
          border: "1px solid",
          height: "400px",
          width: "100%",
          display: "inline-flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "30%",
            border: "1px solid",
            alignSelf: "stretch",
            width: "400px",
          }}
        >
          <nav>nav</nav>
        </div>
        <div
          style={{
            width: "40%",
            border: "1px solid",
            alignSelf: "stretch",
          }}
        >
          <section>section</section>
        </div>
        <div
          style={{
            width: "30%",
            border: "1px solid",
            alignSelf: "stretch",
          }}
        >
          <aside>aside</aside>
        </div>
      </div>
      <div
        style={{
          height: "100px",
          width: "100%",
          border: "1px solid",
          alignSelf: "flex-end"
        }}
      >
        <Footer footer="footer" />
      </div>
    </div>
  );
}

export default App;

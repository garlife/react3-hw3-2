import "./App.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer.js";
import Content from "./Content";
import { Button, Divider } from "@blueprintjs/core";

function Logo() {
  return (
    <>
      <a href="#">
        <img
          src={lMass}
          alt="лого росбанк"
          style={{ width: "100%", height: "100%" }}
        />
      </a>
    </>
  );
}

const Rmass = () => {
  return (
    <>
      <Button type="button" intent="primary">
        Интернет-банк
      </Button>
    </>
  );
};

const lMass = [
  "https://upload.wikimedia.org/wikipedia/ru/a/a2/Логотип_Росбанк.svg",
];

function App() {
  return (
    <div
      className="container"
      style={{
        borderSizing: "border-box",
        padding: "0 20px 0 20px",
        width: "100%",
        height: "100%",
        minHeight: "580px",
        // border: "1px solid",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "space-between",
        // backgroundColor: "hsl(0, 0%, 90%)",
        transition: " background-color 300ms",
      }}
    >
      <div
        className="Menu"
        style={{
          height: "20%",
          minHeight: "133px",
          width: "100%",
          // border: "1px solid",
          display: "inline-flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <div
          style={{
            // border: "1px solid",
            width: "20%",
            alignSelf: "center",
          }}
        >
          <Header mass1={<Logo />} />
        </div>
        <div
          style={{
            // border: "1px solid",
            width: "20%",
            alignSelf: "center",
          }}
        >
          <Header mass2={<Rmass />} />
        </div>
      </div>
      <div
        className="content"
        style={{
          // border: "1px solid",
          height: "60%",
          minHeight: "300px",
          width: "100%",
          display: "inline-flex",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        <Content
          children={
            <>
              {/* <div
          style={{
            width: "30%",
            border: "1px solid",
            alignSelf: "stretch"
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
          <div style={{
            border: "1px solid red",
            width: "100%",
            display: "inline-block",
          }}>
           <div
           style={{border: "1px solid", alignSelf: "center"}}><header>headerSect</header></div> 
           <div  style={{border: "1px solid"}}><article>article</article></div> 
           <div  style={{border: "1px solid"}}><footer>footerSect</footer></div> 
          </div>
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
       */}
            </>
          }
        ></Content>
      </div>
      <div
        className="Footer"
        style={{
          height: "20%",
          width: "100%",
          minHeight: "133px",
          // border: "1px solid",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            // border: "1px solid",
            alignSelf: "flex-end",
          }}
        >
          <Divider  />
          <Footer city={"Москва"} />
        </div>
      </div>
    </div>
  );
}

export default App;

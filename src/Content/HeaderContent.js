import React, { Component } from "react";
import { H1 } from "@blueprintjs/core";

export default class HeaderContent extends Component {
  render() {
    return (
      <header>
        <img
          src="https://trello.com/1/cards/61cb6c1b40585966943ab8a7/attachments/61eefdbc795b9474283baaaf/download/buildings.jpeg"
          style={{
            maxWidth: "100%",
            // boxShadow: "0px 0px 10px 0px",
          }}
          alt="buildings.jpeg"
        ></img>
        <br />
        <br />
        <H1>Финансовые инвестиции:</H1>
      </header>
    );
  }
}

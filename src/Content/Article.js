import React from "react";
import { H3, Text } from "@blueprintjs/core";

export default function Article() {
  const articles = [
    {
      title: "Частные",
      body: "Это инвестиции, выполняющиеся частными лицами.",
    },
    {
      title: "Государственные",
      body: "Это вклады местных или центральных органов управления или же предприятий, являющихся государственными.",
    },
    {
      title: "Иностранные",
      body: " Это инвестиции, которые делаются иностранными компаниями или государствами.",
    },
  ];

  const ArticlesCard = ({ title, body, index }) => {
    return (
      <>
        <li key={index}>
          <H3>{title}</H3>
          <Text>{body}</Text>
        </li>
      </>
    );
  };



  return (
    <>
      <Text ellipsize={true}>
        {articles.map((props) => ArticlesCard(props))}
      </Text>
    </>
  );
}

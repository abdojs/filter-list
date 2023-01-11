import React from "react";
import Card from "../Card/Card";
import NotFound from "../NotFound/NotFound";

const Cards = ({ cards, deleteCard }) => {
  const cards_list =
    cards.length === 0 ? (
      <NotFound />
    ) : (
      cards.map((card, idx) => (
        <Card key={idx} card={card} deleteCard={deleteCard} />
      ))
    );

  return <div>{cards_list}</div>;
};

export default Cards;

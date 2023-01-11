import React from "react";

const Card = ({ card: { id, name, age, adrress, phone }, deleteCard }) => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div>Name:{name}</div>
          <div>Age: {age}</div>
          <div>Adress: {adrress}</div>
          <div>Phone: {phone}</div>
          <div className="close" onClick={(event) => deleteCard(event, id)}>
            x
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

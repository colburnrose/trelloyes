import React from "react";
import Card from "../Card/Card";
import "../List/List.css";

export default function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            onDeleteCard={props.onDeleteCard}
            onClickAdd={props.onClickAdd}
          />
        ))}
        <button
          onClick={() => props.onClickAdd(props.id)}
          type="button"
          className="List-add-button"
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

import React, { Component } from "react";
import List from "./List/List";
import "./App.css";
import STORE from "./store";

const newRandomCard = () => {
  const id =
    Math.random().toString(36).substring(2, 4) +
    Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: "lorem ipsum",
  };
};

function omit(obj, keyToOmit) {
  let { [keyToOmit]: _, ...rest } = obj;
  return rest;
}

class App extends Component {
  state = {
    store: STORE,
  };

  hanldleDeleteCard = (cardId) => {
    const { lists, allCards } = this.state.store;
    const cardlist = lists.map((list) => ({
      ...list,
      cardIds: list.cardIds.filter((id) => id !== cardId),
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: cardlist,
        allCards: newCards,
      },
    });
  };

  handleAddItem = (cardId) => {
    const randomCard = newRandomCard();
    const cardLists = this.state.store.lists.map((list) => {
      if (list.id === cardId) {
        return {
          ...list,
          cardIds: [...list.cardIds, randomCard.id],
        };
      }
      return list;
    });
    this.setState({
      store: {
        lists: cardLists,
        allCards: {
          ...this.state.store.allCards,
          [randomCard.id]: randomCard,
        },
      },
    });
  };

  render() {
    const { store } = this.state;
    return (
      <main className="App">
        <header>Trelloyes!</header>
        <div className="App-list">
          {store.lists.map((list) => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map((id) => store.allCards[id])}
              onDeleteCard={this.hanldleDeleteCard}
              onClickAdd={this.handleAddItem}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;

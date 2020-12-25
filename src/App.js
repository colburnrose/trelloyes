import React, { Component } from "react";
import List from "./List/List";
import "./App.css";
import STORE from "./store";

function omit(obj, keyToOmit) {
  let { [keyToOmit]: _, ...rest } = obj;
  return rest;
}

class App extends Component {
  state = {
    store: STORE,
  };

  handleDeleteItem = (cardId) => {
    console.log("handle delete item clicked", { cardId });
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
              onDeleteItem={this.handleDeleteItem}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;

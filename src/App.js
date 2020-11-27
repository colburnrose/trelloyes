import React, { Component } from "react";
import List from "./List/List";
import "./App.css";

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    },
  };
  render() {
    const { store } = this.props;
    return (
      <main className="App">
        <header>Trelloyes!</header>
        <div className="App-list">
          {store.lists.map((list) => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map((id) => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;

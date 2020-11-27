import { render } from "@testing-library/react";
import React, { Component } from "react";

export default class extends Card(props) {
  static defaultProps = {
    title: "",
    content: "",
  };
  render() {
    return (
      <div className="Card">
        <button type="button">delete</button>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

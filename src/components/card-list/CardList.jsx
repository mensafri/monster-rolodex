import React, { Component } from "react";
import './card-list.styles.css'

export default class CardList extends Component {
  render() {
    const { monster } = this.props;

    return (
      <div className="card-list">
        {monster.map((monster, index) => (
          <h1 key={index}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

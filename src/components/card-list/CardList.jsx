import React, { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/Card";

export default class CardList extends Component {
  render() {
    const { monster } = this.props;

    return (
      <div className="card-list">
        {monster.map((monster) => {

          return (
            <Card monster={monster}/>
          );
        })}
      </div>
    );
  }
}

import React from "react";
import "./card-list.styles.css";
import Card from "../card/Card";

export default function CardList({ monster }) {
  return (
    <div className="card-list">
      {monster.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
}

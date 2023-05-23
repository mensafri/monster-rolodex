import React from "react";
import "./card.styles.css";

export default function Card({ monster }) {
  const { id, name, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

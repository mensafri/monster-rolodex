import React from "react";
import "./search-box.styles.css";

export default function SearchBox({ onChangeHandler }) {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="Search Monster"
        onChange={onChangeHandler}
      />
    </div>
  );
}

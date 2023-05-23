import React, { Component } from "react";
import './search-box.styles.css'

export default class SearchBox extends Component {
  render() {
    const { onChangeHandler } = this.props;

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
}

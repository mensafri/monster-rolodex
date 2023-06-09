import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

interface ISearchBox {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

export default function SearchBox({ onChangeHandler }: ISearchBox) {
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

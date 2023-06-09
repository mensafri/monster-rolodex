import "./card-list.styles.css";
import Card from "../card/Card";

import { Monster } from "../../App";

type CardListProps = {
  monster: Monster[];
};

export default function CardList({ monster }: CardListProps) {
  return (
    <div className="card-list">
      {monster.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
}

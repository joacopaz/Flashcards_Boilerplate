import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Card({ id }) {
  const cards = {}; // replace this with a call to your selector to get all the cards in state
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}

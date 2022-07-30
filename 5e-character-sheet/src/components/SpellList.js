import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function SpellList(props) {
  console.log("SL Props", props);

  const { spells } = props;

  return (
    <>
      <header>
        <h2>Spells</h2>
      </header>
      <ul className="spells-list">
        {spells.map((spell, index) => {
          const { level, name, castingTime } = spell;
          return (
            <li className="spell" key={index}>
              <p>
                {level} <b>{name}</b> {castingTime}
              </p>
              <p>
                <Link to={`/spells/${spell.id}`}>View |</Link>
                <Link to={`/spells/${spell.id}/edit`}>| Edit</Link>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SpellList;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SpellView() {
  const [spell, setSpell] = useState(false);

  const { id } = useParams();
  console.log("What Params?", useParams());

  useEffect(() => {
    fetch(`http://localhost:4000/spells/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("View Spell API", data);
        setSpell(data);
      });
  }, [id]);

  if (!spell) {
    return <p>Checking the scroll library</p>;
  }

  return (
    <div>
      <h2>
        {spell.name}
      </h2>
      <p>
        {spell.level} level, {spell.school}
      </p>
      <hr />
      <p>
        <b>Casting Time: </b>{spell.castingTime}, 
        <b>Range: </b>{spell.range}
      </p>
      <hr />
      <p>
        <b>Description:</b> {spell.description}
      </p>
      <hr />
      <p>
        <b>At Higher Levels: </b> {spell.higherLvls}
      </p>
    </div>
  );
}

export default SpellView;

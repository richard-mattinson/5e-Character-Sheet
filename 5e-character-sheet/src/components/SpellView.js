import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SpellView() {
  const [spell, setSpell] = useState(false);
  const [dice, setDice] = useState([]);
  const [spellSlotFirst, setSpellSlotFirst] = useState(2);
  console.log("Dice", dice);
  console.log("Slots", spellSlotFirst);

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

  if (spell.higherLvls === null) {
    spell.higherLvls = "n/a";
  }

  if (!spell) {
    return <p>Checking the scroll library</p>;
  }

  const diceBag = {
    d4: [1, 2, 3, 4],
    d6: [1, 2, 3, 4, 5, 6],
    d8: [1, 2, 3, 4, 5, 6, 7, 8],
    d10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    d12: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    d20: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  };

  function cast(value) {
    console.log("Value", value);
    let availableSlots = spellSlotFirst
    if(availableSlots === 0)
      alert(`You're out of ${spell.lvl} level slots, adventurer!`)
    availableSlots--
    setSpellSlotFirst(availableSlots)
  }

  function rollDice(value) {
    const roll = value[Math.floor(Math.random() * value.length)];
    // console.log("Dice", rollDice);
    setDice(roll);
  }

  return (
    <div className="spell__card">
      <div className="spell__view">
        <h2>{spell.name}</h2>
        <p className="spell__detail">
          {spell.level} level, {spell.school}
        </p>
        <hr />
        <div className="spell__detail">
          <ul>
            <li>
              <b>Casting Time: </b>
              {spell.castingTime}
            </li>
            <li>
              <b>Range: </b>
              {spell.range}
            </li>
          </ul>
        </div>
        <hr />
        <p className="spell__detail">
          <b>Description:</b> {spell.description}
        </p>
        <hr />
        <p className="spell__detail">
          <b>At Higher Levels: </b> {spell.higherLvls}
        </p>
      </div>
      <div className="spell__casting">
        <div className="spell__cast">
          CAST 
          <button 
            className="button__view"
            onClick={() =>{
              cast(spellSlotFirst[spell.lvl])
            }}>
              {spell.name}!
            </button>
        </div>
        <div className="spell__damage">
          Damage
          <button
            className="button__view"
            onClick={() => {
              rollDice(diceBag[spell.damageDice]);
            }}
          >
            roll {spell.damageDice}
          </button>
          <div className="output">{dice}</div>
        </div>
      </div>
    </div>
  );
}

export default SpellView;

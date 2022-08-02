import { Link } from "react-router-dom";

function SpellList(props) {
  // console.log("SL Props", props);

  const { spells } = props;

  return (
    <>
      <header>
        <h2>Spells</h2>
      </header>
      <ul className="spells-list">
        {spells.map((spell, index) => {
          const { level, name } = spell;
          return (
            <li className="spell" key={index}>
              <p>
                {level} <b>{name}</b>
              </p>
              <div className="spells-list-links">
                <ul>
                  <li>
                    <Link to={`/spells/${spell.id}`}>View</Link>
                  </li>
                  <li>
                    <Link to={`/spells/${spell.id}/edit`}>Edit</Link>
                  </li>
                  <li>
                  </li>
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SpellList;

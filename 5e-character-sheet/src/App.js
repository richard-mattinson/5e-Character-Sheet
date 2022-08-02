import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import SpellList from "./components/SpellList.js";
import SpellAdd from "./components/SpellAdd";
import SpellView from "./components/SpellView";
import SpellEdit from "./components/SpellEdit";
import "./styles/styles.css";

export default function App() {
  const [spells, setSpells] = useState([]);
  const [spellSlots, setSpellSlots] = useState([]);

  console.log("State Spells", spells);

  useEffect(() => {
    fetch(`http://localhost:4000/spells`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("Spells API", data);
        setSpells(data);
      });
  }, []);
  
  return (
    <>
      <nav>
        {/* <h2>Menu</h2> */}
        <div className="main__menu">
          <ul>
            <Link to="/">
              <li>Spell List</li>
            </Link>
            <Link to="/spells/add">
              <li>Add New Spell</li>
            </Link>
          </ul>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<SpellList spells={spells} />} />
          <Route path="/spells" element={<SpellList spells={spells} />} />
          <Route
            path="/spells/add"
            element={<SpellAdd spells={spells} setSpells={setSpells} />}
          />
          <Route path="/spells/:id" element={<SpellView />} />
          <Route
            path="/spells/:id/:edit"
            element={<SpellEdit spells={spells} setSpells={setSpells} />}
          />
        </Routes>
      </main>
    </>
  );
}

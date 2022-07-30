import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SpellsAdd(props) {
  // console.log("Add Props", props);

  const { spells, setSpells } = props;
  const [newSpell, setNewSpell] = useState({
    name: "",
    level: "", //dropdown
    castingTime: "",
    range: "",
    components: "", //checkboxes
    duration: "",
    school: "", //dropdown
    save: "", //dropdown
    damage: "", //dropdown
    concentration: "", //boolean
    ritual: "", //boolean
    description: "", //boolean
    higherLvls: ""

  });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log("Name & Value", name, value);
    setNewSpell({ ...newSpell, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const body = JSON.stringify(newSpell);
    // console.log("New Spell", newSpell, body);

    fetch(`http://localhost:4000/spells`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSpell),
    })
      .then((response) => {
        // console.log("Response", response);
        if (!response.ok) {
          throw new Error("The Post that Hurts the Most!");
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Data", data)
        setSpells([...spells, newSpell]);
      });
    navigate("/");
    // useNavigate hook moves the user back to the Dash when the HireForm function is run through submitting the below form
  }

  return (
    <form className="form-stack spell-form" onSubmit={handleSubmit}>
      <h2>Create Spell</h2>

      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        required
        value={newSpell.name}
        onChange={handleChange}
      />

      <label htmlFor="level">Level:</label>
      <select
        id="first"
        name="level"
        required
        onChange={handleChange}>
          <option value="default" selected disabled>Please select</option>
          <option type="text" value={"1st"}>1st</option>
          <option type="text" value={"2nd"}>2nd</option>
      </select>

      <label htmlFor="castingTime">Castings Time:</label>
      <input
        id="castingTime"
        name="castingTime"
        type="text"
        required
        value={newSpell.castingTime}
        onChange={handleChange}
      />

      <label htmlFor="range">Range / Area:</label>
      <input
        id="range"
        name="range"
        type="text"
        required
        value={newSpell.range}
        onChange={handleChange}
      />

      <label htmlFor="components">Components:</label>
      <input
        id="components"
        name="components"
        type="text"
        required
        value={newSpell.components}
        onChange={handleChange}
      />

      <label htmlFor="duration">Duration:</label>
      <input
        id="duration"
        name="duration"
        type="text"
        value={newSpell.duration}
        onChange={handleChange}
      />

      <label htmlFor="school">School:</label>
      <input
        id="school"
        name="school"
        type="text"
        value={newSpell.school}
        onChange={handleChange}
      />

      <label htmlFor="save">Save:</label>
      <input
        id="save"
        name="save"
        type="text"
        value={newSpell.save}
        onChange={handleChange}
      />

      <label htmlFor="damage">Damage / Effect:</label>
      <input
        id="damage"
        name="damage"
        type="text"
        value={newSpell.damage}
        onChange={handleChange}
      />

      <label htmlFor="concentration">Concentration:</label>
      <input
        id="concentration"
        name="concentration"
        type="text"
        value={newSpell.concentration}
        onChange={handleChange}
      />

      <label htmlFor="ritual">Ritual:</label>
      <input
        id="ritual"
        name="ritual"
        type="text"
        value={newSpell.ritual}
        onChange={handleChange}
      />

      <label htmlFor="description">Description:</label>
      <textarea className="textarea"
        id="description"
        name="description"
        cols="47" rows="5"
        required
        value={newSpell.description}
        onChange={handleChange}>
          Enter Description
      </textarea>

      <label htmlFor="higherLvls">At Higher Levels:</label>
      <textarea className="textarea"
        id="higherLvls"
        name="higherLvls"
        cols="47" rows="3"
        value={newSpell.higherLvls}
        onChange={handleChange}>

      </textarea>

      <div className="actions-section">
        <button className="button blue" type="reset">
          Reset
        </button>
        <button className="button blue" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default SpellsAdd;

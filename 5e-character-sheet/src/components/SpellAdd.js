import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function SpellsAdd(props) {
  // console.log("Add Props", props);

  const ref = useRef()
  // const regEx = /^a-zA-Z$/;
  const { spells, setSpells } = props;
  const navigate = useNavigate();
  const [newSpell, setNewSpell] = useState({
    name: "",
    level: "",
    castingTime: "",
    range: "",
    // components: "", //checkboxes
    duration: "",
    school: "",
    save: "", //dropdown + save dc from state?
    damage: "", 
    damageDice: "", //dropdown
    concentration: "",
    ritual: "", 
    description: "",
    higherLvls: ""
  });
  // const validate = (values) => { // could this be part of handleChange?
  //   const errors = {
  //     name: ""
  //   };
  //   // const regexp =
  //   //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/;
  //   const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.name) {
  //     errors.email = "Email is required!";
  //   } else if (!pattern.test(values.name)) {
  //     errors.email = "This is not Valid email format";
  //   }
  //   return errors;
  // };

  // function nameChecker(value) {
  //   console.log(value);
  //   if(regEx.test(value)){
  //     console.log('passed');
  //   } else{
  //     console.log('failed');
  //   }
  // }

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

      {/* TODO: Use useRef as a querySelector to display an error if none alphanumeric characters are entered */}
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        ref={ref}
        required
        // className={`${errors.name}` ? 'error-control' : 'form-control'}
        // placeholder={`${errors.name}` ? `${errors.name}` : "Spell Name"}
        value={newSpell.name}
        onChange={handleChange}
      />

      <label htmlFor="level">Level:</label>
      <select id="first" name="level" required onChange={handleChange}>
        <option value="default" selected disabled>
          Please select
        </option>
        <option type="text" value={"Cantrip"}>
          Cantrip
        </option>
        <option type="text" value={"1st"}>
          1st
        </option>
        <option type="text" value={"2nd"}>
          2nd
        </option>
        <option type="text" value={"3rd"}>
          3rd
        </option>
        <option type="text" value={"4th"}>
          4th
        </option>
        <option type="text" value={"5th"}>
          5th
        </option>
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

      {/* <label htmlFor="components">Components:</label>
      <label className="checkbox-container">
        <input
          className="checkbox"
          id="verbal"
          name="verbal"
          type="checkbox"
          value={"Verbal"}
          onChange={handleChange}
        />
        Verbal
      </label>
      <label className="checkbox-container">
        <input
          className="checkbox"
          id="somatic"
          name="somatic"
          type="checkbox"
          value={"Somatic"}
          onChange={handleChange}
        />
        Somatic
      </label>
      <label className="checkbox-container">
        <input
          className="checkbox"
          id="material"
          name="material"
          type="checkbox"
          value={"Material"}
          onChange={handleChange}
        />
        Material
      </label> */}

      <label htmlFor="duration">Duration:</label>
      <input
        id="duration"
        name="duration"
        type="text"
        value={newSpell.duration}
        onChange={handleChange}
      />

      <label htmlFor="school">School:</label>
      <select id="school" name="school" required onChange={handleChange}>
        <option value="default" selected disabled>
          Please select
        </option>
        <option type="text" value={"Abjuration"}>
          Abjuration
        </option>
        <option type="text" value={"Divination"}>
          Divination
        </option>
        <option type="text" value={"Conjuration"}>
          Conjuration
        </option>
        <option type="text" value={"Enchantment"}>
          Enchantment
        </option>
        <option type="text" value={"Evocation"}>
          Evocation
        </option>
        <option type="text" value={"Illusion"}>
          Illusion
        </option>
        <option type="text" value={"Necromancy"}>
          Necromancy
        </option>
        <option type="text" value={"Transmutation"}>
          Transmutation
        </option>
      </select>

      <label htmlFor="save">Save:</label>
      <input
        id="save"
        name="save"
        type="text"
        value={newSpell.save}
        onChange={handleChange}
      />

      <label htmlFor="damage">Damage / Effect:</label>
      <select id="damage" name="damage" required onChange={handleChange}>
        <option value="default" selected disabled>
          Please select
        </option>
        <option value="n/a">n/a</option>
        <option type="text" value={"Acid"}>
          Acid
        </option>
        <option type="text" value={"Bludgeoning"}>
          Bludgeoning
        </option>
        <option type="text" value={"Conjuration"}>
          Conjuration
        </option>
        <option type="text" value={"Cold"}>
          Cold
        </option>
        <option type="text" value={"Fire"}>
          Fire
        </option>
        <option type="text" value={"Force"}>
          Force
        </option>
        <option type="text" value={"Lightning"}>
          Lightning
        </option>
        <option type="text" value={"Necrotic"}>
          Necrotic
        </option>
        <option type="text" value={"Piercing"}>
          Piercing
        </option>
        <option type="text" value={"Poison"}>
          Poison
        </option>
        <option type="text" value={"Psychic"}>
          Psychic
        </option>
        <option type="text" value={"Radiant"}>
          Radiant
        </option>
        <option type="text" value={"Slashing"}>
          Slashing
        </option>
        <option type="text" value={"Thunder"}>
          Thunder
        </option>
      </select>

      <label htmlFor="damageDice">Damage Dice:</label>
      <select
        id="damageDice"
        name="damageDice"
        required
        onChange={handleChange}
      >
        <option value="default" selected disabled>
          Please select
        </option>
        <option value="n/a">n/a</option>
        <option type="text" value={"d4"}>
          d4
        </option>
        <option type="text" value={"d6"}>
          d6
        </option>
        <option type="text" value={"d8"}>
          d8
        </option>
        <option type="text" value={"d10"}>
          d10
        </option>
        <option type="text" value={"d12"}>
          d12
        </option>
      </select>

      <label htmlFor="concentration"></label>
      <label className="checkbox-container">
        <input
          className="checkbox"
          id="concentration"
          name="concentration"
          type="checkbox"
          value={"Concentration"}
          onChange={handleChange}
        />
        Concentration
      </label>

      <label htmlFor="ritual"></label>
      <label className="checkbox-container">
        <input
          className="checkbox"
          id="ritual"
          name="ritual"
          type="checkbox"
          value={"Ritual"}
          onChange={handleChange}
        />
        Ritual
      </label>

      <label htmlFor="description">Description:</label>
      <textarea
        className="textarea"
        id="description"
        name="description"
        cols="47"
        rows="5"
        required
        value={newSpell.description}
        onChange={handleChange}
      >
        Enter Description
      </textarea>

      <label htmlFor="higherLvls">At Higher Levels:</label>
      <textarea
        className="textarea"
        id="higherLvls"
        name="higherLvls"
        cols="47"
        rows="3"
        value={newSpell.higherLvls}
        onChange={handleChange}
      ></textarea>

      <div className="actions-section">
        {/* TODO: Make this button reset the form! */}
        <button className="button__form" type="reset">
          Reset
        </button>
        <button className="button__form" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default SpellsAdd;

# 5e-Character-Sheet

## Statement
Attempting to bring together JS, React, HTML and CSS. Practicing methods including state, components, routing and conditional rendering.
****
## Two Day Deliverables
### Data
- Third level Artificer spell loadout

### Function
- Spell slots stored in `state`
- Spell casting on each spell, updates `state`
- Spell dice rolls for to hit, damage and saves  
****
## Full Project Deliverables

### Page Overview
- Two React `routes` 
  - Adventure
  - Combat
  
### Skill checks
- Skills calculated based on applicable modifiers 
- Dice roller for each skill

### Spells 
- Spell list displayed via `effect hook` to show only currently equipped spells
- Checkboxes to cast spells, updating available spell slots in `state` and `the DOM`
- Dice roller for saving throws. Define each of your dice as objects containing arrays of values that you can just randomly index into to get their value

### Long and Short Rests
- Reset spell slots and other skills in `state` and `the DOM` after a rest
****
## Setup
- npm init
- npm install
- npx create-react-app 5e-character-sheet
- cd 5e-character-sheet
- npm start
****
### Optional setup
#### To use Routing
- npm install react-router-dom@6
#### To start a local server
- npm install json-server
- npx json-server -p 4000 db/db.json --watch



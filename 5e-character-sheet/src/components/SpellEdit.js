// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect } from "react/cjs/react.production.min";

// function ContactsEdit(props) {
//   // console.log("Add Props", props);

//   // setContacts and contacts must be passed as props
//   // to this component so new contacts can be added to the
//   // state
//   const { contacts, setContacts } = props;
//   const [editedContact, setEditedContact] = useState({
//     firstName: "",
//     lastName: "",
//     street: "",
//     city: "",
//     studio: "",
//     bestKnown: "",
//     honker: "",
//   });
//   const navigate = useNavigate();
//   const { id } = useParams();
//   // const

//   useEffect(() => {
//     fetch(`http://localhost:4000/contacts/${id}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("You didn't say the magic words!");
//         }
//         response.json();
//       })
//       .then((data) => {
//         console.log("Edit Contacts API", data);
//         setContacts(data);
//       });
//   }, [id]);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     // console.log("Name & Value", name, value);
//     setEditedContact({ ...editedContact, [name]: value });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     const body = JSON.stringify(editedContact);
//     // console.log("New Contact", newContact, body);

//     // DONE: Insert another fetch here for posting the new contact details to JSON
//     fetch(`http://localhost:4000/contacts`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(editedContact),
//       // Turn each provided line into a string to be posted to the JSON server
//     })
//       .then((response) => {
//         // console.log("Response", response);
//         return response.json();
//       })
//       .then((data) => {
//         // console.log("Data", data)
//         setContacts([...contacts, editedContact]);
//       });
//     navigate("/");
//     // useNavigate hook moves the user back to the Dash when the HireForm function is run through submitting the below form
//   }

//   return (
//     // this section should work once the symbols have been edited
//     <form className="form-stack contact-form" onSubmit={handleSubmit}>
//       <h2>Edit Contact</h2>

//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         value={editedContact.firstName}
//         onChange={handleChange}
//       />

//       <label htmlFor="lastName">Last Name:</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         value={editedContact.lastName}
//         onChange={handleChange}
//       />

//       <label htmlFor="street">Street:</label>
//       <input
//         id="street"
//         name="street"
//         type="text"
//         value={editedContact.street}
//         onChange={handleChange}
//       />

//       <label htmlFor="city">City:</label>
//       <input
//         id="city"
//         name="city"
//         type="text"
//         value={editedContact.city}
//         onChange={handleChange}
//       />

//       <label htmlFor="studio">Studio:</label>
//       <input
//         id="studio"
//         name="studio"
//         type="text"
//         value={editedContact.studio}
//         onChange={handleChange}
//       />

//       <label htmlFor="bestKnown">Best Known for:</label>
//       <input
//         id="bestKnown"
//         name="bestKnown"
//         type="text"
//         value={editedContact.bestKnown}
//         onChange={handleChange}
//       />

//       <label htmlFor="Honker">Honker!:</label>
//       <input
//         id="Honker"
//         name="Honker"
//         type="text"
//         value={editedContact.honker}
//         onChange={handleChange}
//       />

//       <div className="actions-section">
//         <button className="button blue" type="submit">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// }

// export default ContactsEdit;

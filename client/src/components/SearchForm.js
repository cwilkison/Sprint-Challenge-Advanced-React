// import React, { useState } from "react";
// import { useForm } from "../hooks/useForm";
// export function SearchForm(props) {
//   // const [form, setForm] = useState("");
//   // console.log(form);
//   // const handleChange = e => {
//   //   setForm({ ...form, [e.target.name]: e.target.value });
//   // };


//   const [form, handleChange] = useForm();
//   const handleSubmit = e => {
//     e.preventDefault();
//     props.handleSearch(form.search);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         name="search"
//         placeholder="Search"
//         onChange={handleChange}
//         value={form.search}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

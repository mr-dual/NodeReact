import React, { useState } from "react";
export default function Form(prop) {
  const [inputValue, changeInputValue] = useState("");
  const handleChange = (e) => {
    changeInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    prop.return(inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        />
      <input type="submit" value="Submit" />
      <br />
      <label className="label" htmlFor="input">Type your name:</label>
    </form>
  );
}

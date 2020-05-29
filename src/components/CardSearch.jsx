import React, { useState } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";

const CardSearch = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    document.activeElement.blur();
    setInputValue("");
    props.getData(inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          type="text"
          value={inputValue}
          id="search"
          name="search"
          placeholder="Search by name"
          onChange={handleChange}
        />
      </label>
      <button>Search</button>
    </form>
  );
};

export default connect(() => ({}), { getData })(CardSearch);

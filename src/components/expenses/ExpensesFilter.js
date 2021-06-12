import React from "react";

import "./ExpensesFilter.css";

// Controlled Component
// A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange.
// A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component.
// You could also call this a "dumb component".

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

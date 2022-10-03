import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  //to set a particular year
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //to filter the expenses according to selected year
  const filteredExpenses = props.items.filter((expence) => {
    return expence.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}              
        onChangeFilter={filterChangeHandler}    //parent to child
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList list={filteredExpenses} />       {/* child to parent */}
    </Card>
  );
}

export default Expenses;

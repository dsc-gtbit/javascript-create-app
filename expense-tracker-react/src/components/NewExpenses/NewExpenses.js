import React, { useState } from "react";
import ExpensesForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const newexpenseData = {
      //this is an object
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(newexpenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  // return (
  //   <div className="new-expense">
  //     {!isEditing && (
  //       <button onClick={startEditingHandler}>Add New Expense</button>
  //     )}
  //     {isEditing && <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} />}
  //   </div>
  // );
  if (!isEditing) {
    return (
      <div className="new-expense">
        <button onClick={startEditingHandler}>Add New Expense</button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpensesForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    </div>
  );
};

export default NewExpenses;

import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [add, setAdd] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setAdd(false); //add expense form is closed after submited
  };

  const addingHandler = () => {
    setAdd(true);
  };

  const stopAdding = () => {
    setAdd(false);
  };

  return (
    <div className="new-expense">
      {!add && <button onClick={addingHandler}>Add New Expense</button>}
      {add && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAdding}
        />
      )}
    </div>
  );
};
export default NewExpense;

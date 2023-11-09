import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//remind that ExpenseItem component is re-executed in state when update new value
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.mytitle); //setTitle is a function which update new value like a updating function
  //when we call this updating value
  //its not just recive a new value
  //whole function will be excuted again
  // let a = "ExpeenseItem evaluated by react";
  // console.log(a);
  //as we use 'ExpenseItem' 4 times so 4 separeted instances of this
  //componet are being created

  //state is really separeted
  //that is why when we click on one button one
  //specific instance is changed others are not effected

  const Click = () => {
    setTitle("Updated!!"); //setTitle functionCall
    console.log(title); //thats show old value in colsole after updated
  };
  return (
    <Card className="expense-item">
      <ExpenseDate mydate={props.date} />
      <div className="expense-item__description">
        <h2>{props.mytitle}</h2>
        <div className="expense-item__price">${props.curramount}</div>
      </div>
      {/* <button onClick={Click}>Change Title</button> */}
    </Card>
    //and also evaluated whole jsx code compared to last time and update the new value
  );
};
export default ExpenseItem;

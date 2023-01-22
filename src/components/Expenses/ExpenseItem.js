import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';



const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title); // It should be called only inside the component function not outside nor inside the nested elements

  const clickHandler = () => {
    setTitle('Updated!!!');
    // console.log(title);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
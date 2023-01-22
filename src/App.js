import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 799.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 294.67,
    date: new Date(2020, 3, 18),
  },
  {
    id: "e3",
    title: "New Desk(wooden)",
    amount: 576.67,
    date: new Date(2022, 12, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <p>Lets begin React</p>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

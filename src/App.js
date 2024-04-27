import './App.css';
import { Fragment } from 'react';
import Expense from './components/expenses/expenses';
import ExpenseHeader from './components/UI/expense-header';

const App = () => {
  return (
   <Fragment>
    <ExpenseHeader/>
    <Expense/>
   </Fragment>
  );
}

export default App;

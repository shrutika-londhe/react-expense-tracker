import './App.css';
import { Fragment } from 'react';
import Expense from './components/expenses/expenses';
import ExpenseHeader from './components/UI/layout/expense-header';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import SignUp from './components/auth/signup';
import Login from './components/auth/login';
import Home from './components/page/home';
import AuthForm from './components/page/auth-form';

const App = () => {
  return (
   <Fragment>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/auth/signup'>
        <AuthForm/>
      </Route>
      <Route path='/auth/login'>
        <Login/>
      </Route>
    </Switch>    
    
   </Fragment>
  );
}

export default App;

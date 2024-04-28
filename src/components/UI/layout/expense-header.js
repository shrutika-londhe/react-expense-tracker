import React from 'react'
import SignUp from '../../auth/signup'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
const ExpenseHeader = () => {

  return (  
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Container>
         <NavbarBrand className="fs-1">Budget Guide</NavbarBrand>
         <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
           <div className="d-flex">
            <NavLink to='/auth/login'> <button class="btn btn-outline-light mx-3">Log In</button></NavLink>
             <NavLink to='/auth/signup'><button class="btn btn-outline-warning me-4">Sign Up</button></NavLink>
         </div>
       </div>
      </Container>
      </Navbar>
      

  )
}

export default ExpenseHeader
import React from 'react'
import expenseimg from '../assets/expenseimg.jpeg'
import ExpenseHeader from '../UI/layout/expense-header'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <section>
        <ExpenseHeader/>
        <Container fluid>
        <Container>
          <Row>
           <Col md='6'>
            <img src={expenseimg} width="100%" />
           </Col>         
            <Col md='6' className='d-flex align-items-center'>
            <div className="px-4">
           <h1 className="mb-4 text-center py-2 fw-bolder">Welcome to Your<br /> Expense Tracker!</h1>
           <p className="text-center fs-4">Here, you can effortlessly track and manage your <br /> daily/monthly expenses, making financial management a breeze!</p>
            </div>
            </Col>                     
          </Row>          
        </Container>            
      </Container>
   
        
        
      </section>

  )
}

export default Home
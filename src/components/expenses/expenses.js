import React from 'react'
import expenseimg from './expenseimg.jpeg';

const Expense = () => {
  return (
    <div>
      <section>        
        <div class="container-fluid"> 
            <div class="container">       
                <div class="row">
                    <div class="col-6 row1">
                        <img src={expenseimg} width="100%"/>
                    </div>
                    <div class="col-6 d-flex align-items-center">
                        <div class="px-4">
                            <h1 class="mb-4 text-center py-2 fw-bolder">Welcome to Your<br/> Expense Tracker!</h1>
                            
                            <p class="text-center fs-4">Here, you can effortlessly track and manage your <br/> daily/monthly expenses, making financial management a breeze!</p>
                        </div>                       
                    </div>
            </div> 
        </div>                       
        </div>
    </section>
    </div>
  )
}

export default Expense
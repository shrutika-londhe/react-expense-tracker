import React from 'react'

const ExpenseHeader = () => {
  return (
    <div>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>
        <div class="container d-flex">
          <a class="navbar-brand fs-1" href="#">Budget Guide</a>
          <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
            <div class="d-flex">
              <a href="/login.html"><button class="btn btn-outline-light mx-3">Log In</button></a>
              <a href="/signup.html"><button class="btn btn-outline-warning me-4">Sign Up</button>  </a>
            </div>
          </div>
        </div>
        </div>
      </nav>
    </div>


  )
}

export default ExpenseHeader
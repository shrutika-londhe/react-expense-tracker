import { useState, useRef } from "react";
import classes from './login.module.css';

const Login = () => {

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredEmail=emailInputRef.current.value
    const enteredPassword=passwordInputRef.current.value
    if(enteredPassword.length===0){
      alert("Enter a valid Password"); 
      return
    }
    if(enteredEmail.length===0){
      alert("Enter a valid Email"); 
      return
    }
    if (passwordInputRef.current.value !== confirmPasswordInputRef.current.value) {
      alert("Password mismatch"); 
      return; 
    }
   
        console.log(JSON.stringify({
          email:enteredEmail,
          password:enteredPassword,
        })) 
  }



  return (
    <div className={classes.containerRelative}>
    <div className={classes.blueDesign}></div>
    <div className={classes.blueDesign1}></div>
        <section className={`${classes.auth} bg-secondary`}>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }}>
            {isLogin ? "Login" : "Sign Up"}
          </h1>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
              />
            </div>
            {!isLogin && ( 
            <div className={classes.control}>
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                required
                ref={confirmPasswordInputRef} 
              />
            </div>
          )}
            <div className={classes.actions}>
             
            <button>{isLogin ? "Login" : "Create Account"}</button>
              

              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </section> 
        </div>    
  )
}

export default Login


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import forgotStyle from "../../style/forgotPassword.module.css";
import forgot from "../../img/forgot.jpg";
import { forgotPasswordValidation } from "./loginValidation";
import axios from "axios"
function ForgotPassword() {
  const [email,setEmail]=useState("");
  const [forgotError, setForgotError] = useState({});
  const [error,displayError]=useState({});
  const navigate = useNavigate();
  let obj={};
  const handleChange=(e)=>{
      setEmail(e.target.value);
  }

  const handleSubmit =async(e) => {
    e.preventDefault();
      setForgotError(forgotPasswordValidation(email));
     if(!forgotError.forgotError){
      const values={
        "email":email
      }
     const result=await axios.post("http://localhost:3035/v1/forgot-password",values);

     if(result.status){
        navigate("/login"); // flash message
     }
     else{
    
      displayError({message:"wrong Email"})
     }

     }
  };

  return (
    <div className={forgotStyle.parent}>
      <div className={forgotStyle.div1}>
        <img src={forgot} alt="forgot password" />
      </div>
      <div className={forgotStyle.div2}>
        <div className={forgotStyle.divstyle}>
          <div className={forgotStyle.header}>Forgot Password</div>
          <div className={forgotStyle.headerContent}>
            please enter registered email to set your password
          </div>

          <div className={forgotStyle.input}>
            <label>Please Enter Your Name</label>
            <br />
            <input type="text" value={email} onChange={handleChange}/>
          </div>
          {forgotError.forgotError&&(<p style={{ color: "red", fontSize: "22px",display:"block" }}>{forgotError.forgotError}</p>)}

          {error.message&&(<p style={{color:"red",fontSize:"13px"}}>{error.message}</p>)}
          <div>
            <button className={forgotStyle.button} onClick={handleSubmit}>Submit</button>
          </div>
          <br />
            
          <div>
            <a onClick={() => navigate("/login")}>Back To Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;


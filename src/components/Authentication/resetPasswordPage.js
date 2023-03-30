import React from "react";
import forgotStyle from "../../style/resetPassword.module.css"
import forgot from "../../img/forgot.jpg"
import { resetPasswordValidation } from "./loginValidation";
class resetPassword extends React.Component{
    
    constructor(){
        super();
        this.state={
            password:"",
            confirmPassword:"",
            validate:{}
        }
    }

  

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
          ...prevState,   // in class component send the object as a reference
          [name]: value,
        }));
      };
      

    submit=(e)=>{
        this.setState({validate:resetPasswordValidation(this.state)}) // only filling the required value of validate
    
        if(!this.state.validate)
        alert(JSON.stringify(this.state));
    }

    render(){

        return (
            <div className={forgotStyle.parent}>
            <div className={forgotStyle.div1}>
              <img src={forgot}/>
            </div>
            <div className={forgotStyle.div2}>
             <div className={forgotStyle.divstyle}>
            <div className={forgotStyle.header}> 
                Reset Password
              </div>
              <div className={forgotStyle.headerContent}>
              Please set your new password
              </div>

              <div className={forgotStyle.input}>
               <label>New Password</label>
               <br/>
               <input type="text" name="password" value={this.state.password} onChange={this.handleChange}></input>
               <br/>
               <br/>
               <label> Confirm New Password</label>
               <br/>
               <input type="text" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}></input>
            
            
            </div>
            {this.state.validate.resetError&&(<p style={{color:"red",fontSize:"22px"}}>{this.state.validate.resetError}</p>)}
            <div>
                <button className={forgotStyle.button} onClick={this.submit} >Submit</button>
            </div>
            </div>
            </div></div>

        )
    }










}

export default resetPassword;
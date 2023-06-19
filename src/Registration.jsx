import React from 'react'
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";


function Registration() {
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const onSubmit = (data) => console.log(data);
  
      return (
          <>
      
  
              <p className="title">Registration Form</p>
  
              <form 
        className="App" 
        onSubmit={handleSubmit(onSubmit)}>
                  <input 
          type="text"{...register("name")}/>
                  <input 
          type="email"{...register("email",{required:true})}/>
          {errors.email && 
          <span style={{ color: "red" }}>
          *Email* is mandatory </span>}
                  <input type="password" {...register("password")}/>
                 <button>
                  <input type={"submit"}
                      style={{ backgroundColor: "#a1eafb" }} /></button>
                <Link to="/Login">-Login-</Link>
                     
              </form>
              
          </>
      );
  }
  
  export default Registration;
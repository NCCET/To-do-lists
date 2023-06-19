import React from "react";
import { Routes, Route} from "react-router-dom"
import "./App.css";
import {useForm} from "react-hook-form";
import Login from "./Login";
import Registration from "./Registration";
import Home from "./Home";


function App(props) {
   const { register, handleSubmit, formState: { errors } } = useForm();
 
   const onSubmit = (data) => console.log(data);

	return (
 <div>
    <Routes>
      <Route path="/" element={ <Registration/> }/>
      <Route path="login" element={ <Login/> }/>
      <Route path="Home" element={ <Home/> }/>
    </Routes>
    </div>


		// <>
    

		// 	<p className="title">Registration Form</p>

		// 	<form 
    //   className="App" 
    //   onSubmit={handleSubmit(onSubmit)}>
		// 		<input 
    //     type="text"{...register("name")}/>
		// 		<input 
    //     type="email"{...register("email",{required:true})}/>
    //     {errors.email && 
    //     <span style={{ color: "red" }}>
    //     *Email* is mandatory </span>}
		// 		<input type="password" {...register("password")}/>
		// 		<input type={"submit"}
		// 			style={{ backgroundColor: "#a1eafb" }} />
		// 	</form>
		// </>
	);
}

export default App;

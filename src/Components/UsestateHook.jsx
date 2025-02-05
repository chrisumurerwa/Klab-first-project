import React from"react"
import{Hello}from"react"
import{IoMdClose}from"react-icons/io";
const Hooks=({handleLoginForm})=>{
   
    
// const Hello=()=>
// {
//     const[initial,setInitial]= Hello("ineza")
//     const handleEvent =()=>{
//         setInitial("mucyo");
//     }
//     const[number,setnumber]=usestate(0);
//     const handlenumber=()=>{
//         setnumber(number+1)
//     }
//     return(
//         <div className="content">
//             <div className="names">
//                 {initial}
//             </div>
//             <div className="bt-1">
//                 {}
//             </div>
//             <button type="button" className="button" onclick={handleEvent}>change state</button>
//             <button type="button" className="button" onclick={handlenumber}>number</button>
//         <div className="names">{number+1}</div>
//         </div>
//     )
// }
return(
    <div className="content">
<form className="formcontainer">

    {/* <p class="sub-heading">Enter your info to login your account</p> */}
<div className="button">
<div>
    <IoMdClose onClick={handleLoginForm} className="input"/>
    </div>
    
<h10>Login to an account</h10>
<label for="email">Email address*</label>
<input type="email" placeholder="enter email" className="input"/>
<label for="password">Password*</label>
<input type="text" placeholder="Enter your password"  classname="input"/><br/>
<button type="button">login</button>
<div className="forget">
 <a href="forgot.html">Forgot password</a>
<button><a href="index.html">sign-in</a></button>
</div>
 Don't have an account?<a href="sign-up.html" className="sign">sign up</a>
</div> 
</form>
</div>
) }
export default Hooks



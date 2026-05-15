import { useState } from "react";


function LoginForm(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [errors,setError]=useState({});

    const handleSubmit=(e) => {
        e.preventDefault();
    let newErrors={};

        if (email=== ""){

            newErrors.email="Email is Required ";
                }
                else if(!email.includes("@"))
                {
                    newErrors.email="Enter valid Email";
                }
//  password Validations 
if (password === "")
{
    newErrors.password="Password is Required";
}
else if(password.length<6)
{
    newErrors.password="Password must be at least 8 characters"
} 
setError(newErrors);
if (Object.keys(newErrors).length==0) {
    alert("Login Sucessfully");
}  };

return(
    <div 
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        backgroundColor:"#f2f2f2"

    }}>
        <div style={{
            padding:"30px",
            backgroundColor:"white",
            borderRadius:"10px",
            boxShadow:"0px 0px 10px gray",
            width:"300px"

        }}>
           
    <div style={{padding:"20px"}}>
        <h1>Login Form</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}
                /> 
                <p style={{color:"red"}}>
                {errors.email}
                </p>
            </div>
            <div>
                <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}
                /> 
                <p style={{color:"red"}}>
                {errors.password}
                </p>
            </div>
            <button  type="submit">
                Login</button>
        </form>

    </div>
    </div>
    </div>

);
}
export default LoginForm;
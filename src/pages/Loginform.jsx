import { useActionData } from "react-router-dom";


function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");

    const handleSubmit=(e) => {
        e.preventDefault();
        let newErrors={};

        if (email==""){

            newErrors.email="Email is Required ";
                }
                else if(!email.include("@"))
                {
                    newErrors.email="Enter valid Email";
                }
//  password Validations 
if (password=="")
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
    <div style={{padding:"20px"}}>
        <h1>Login Form</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </form>

    </div>

)
}
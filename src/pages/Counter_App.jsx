import{useState} from "react";

function CountApp(){

    const[count,setCount]=useState(0);
    const increase = () =>{
        setCount(count +1);
    };
 const decrease = () =>{
      if(count>0){
        setCount(count-1);
    }
};


const Reset=() =>{
    setCount(0);
};
return(
    <div 
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"200vh",
        backgroundColor:"#f2f2f2"
    }}>

        <div
        style={{
            padding:"30px",
            backgroundColor:"white",
            borderRadius:"10px",
            boxShadow:"0px 0px 10px gray",
            width:"300px"
        }}>
        <h1>Counter App</h1>

         <h2> {count}</h2>
        <button onClick={increase}>
            Increase
        </button>

         <button onClick={decrease}
           style={{marginLeft:"10px"}}>
            Decrease
        </button>

          <button onClick={Reset}
           style={{marginLeft:"10px"}}>
            Reset
        </button>

    </div>
    </div>
)
};
export default CountApp;
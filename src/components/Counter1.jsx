import { useState } from "react";
import Common from './Common';
function Counter1(){
    const[data,setdata]=Common();
    return(
        <div>
            {data} <br />
            <button onClick={()=>setdata(data+1)}>add</button>
            <button onClick={()=>setdata(data-1)}>dec</button>
        </div>
    )
}
export default Counter1;
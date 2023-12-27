import { useState } from "react";
function Common(initial=0){
    const[data,setdata]=useState(initial);
    return ([data,setdata]);
}
export default Common;
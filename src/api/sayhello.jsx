import axios from 'axios';
import {useEffect,useState} from "react";
//axios get
// function Sayhello(){
//     const[data,setdata]=useState("");
//     useEffect(()=>{
//         axios.get(`https://api.github.com/users/jainmayank5666`)
//         .then((val)=>{
//             console.log(val.data);
//             setdata(val.data);
//         })
//     },[])
//     return(
//         <div>
//             {data && Object.entries(data).map(([key,value])=><li key={key}><strong>{key}</strong>{value}</li>)}
//         </div>
//     )
// }
// export default Sayhello;

//or
//axios get
// function Sayhello(){
//     const[data,setdata]=useState("");
//     useEffect(()=>{
//         axios.get(`https://jsonplaceholder.typicode.com/posts`)
//         .then((val)=>{
//             console.log(val.data);
//             setdata(val.data);
//         })
//     },[]);
//     return(
//         <div>
//             {data && data.map((val)=><li key={val.id}>{val.id} {val.title}</li>)}
//         </div>
//     )
// }
// export default Sayhello;

//axios post
function Sayhello(){
    const obj={
        firstname:"",
        lastname:""
    }
    const[data,setdata]=useState(obj);
    function handleclick(e){
        setdata(()=>{
            const result=({...data,[e.target.name]:e.target.value});
            return result;
        })
    }
    function handlesubmit(e){
        e.preventDefault();
        axios.post(`https://jsonplaceholder.typicode.com/posts`,data)
        .then((val)=>{
            console.log(val);
        })
    }
    return(
        <div>
            <form action="" onSubmit={handlesubmit}>
                <input type="text" name='firstname' value={data.firstname} onChange={handleclick} placeholder='enter your firstname'/>
                <input type="text" name='lastname' value={data.lastname} onChange={handleclick} placeholder='enter your lastname'/>
                <button type='submit'>add</button>
            </form>
        </div>
    )
}
export default Sayhello;
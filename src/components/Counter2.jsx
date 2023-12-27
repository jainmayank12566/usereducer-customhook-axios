import Common from "./Common";
function Counter2(){
    const [data,setdata]=Common(10);
    return(
        <div>
            {data} <br />
            <button onClick={()=>setdata(data+1)}>add</button>
            <button onClick={()=>setdata(data-1)}>dec</button>
        </div>
    )
}
export default Counter2;
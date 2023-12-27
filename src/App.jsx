// //useReducer
// import { useReducer } from "react";
// function App(){
//     const initialState=0;
//     const reducer=(state,action)=>{
//         switch(action){
//             case "Increment":
//                 return state+1;
//             case "Decrement":
//                 return state-1;
//             default:
//                 return state;
//         }
//     }
//     const[count,dispatch]=useReducer(reducer,initialState);
//     return(
//         <div>
//             <h1>count is{count}</h1>
//             <button onClick={()=>dispatch("Increment")}>add</button>
//             <button onClick={()=>dispatch("Decrement")}>sub</button>
//         </div>
//     )
// }
// export default App;

//customhook components->common.js counter1.js counter2.js is used
// import Counter1 from './components/Counter1';
// import Counter2 from './components/Counter2';
// function App(){
//     return(
//         <div>
//             <Counter1 />
//             <Counter2 />
//         </div>
//     )
// }
// export default App;

//axios in react
import Sayhello from './api/sayhello.jsx';
function App(){
    return(
        <Sayhello />
    )
}
export default App;
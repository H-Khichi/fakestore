
import { useState } from "react";

export default function newApp() {
    let [counter, setCounter] = useState([0, 1, 2, 3, 4, 5]);
  const decrement = (index) => {
    let copyCounter =[...counter];
    copyCounter[index]-=1;
    setCounter(copyCounter);
  }
  const increment = (index) => {
    let copyCounter =[...counter]; 
    copyCounter[index]+=1;
    setCounter(copyCounter);
    
  }
  // let [counterX, setCounterX] = useState(0);
  // const decrementX = () => {
  //   setCounterX(counterX-=1)
  // }
  // const incrementX = (inde) => {
  //   setCounterX(counterX = counterX + 1)
  // }
  return (

    <div>
      {
        counter.map((x,index) => (
      <>
        <button onClick={()=>decrement(index)}>decrement</button>
        < span>
          {x}
        </span>
        <button onClick={()=>increment(index)}>increment</button>
        <br/>  
    </>
  )
        )
}
  </div>
  )

}
import React,{useState} from 'react'

const App = () => {
  const[data,setData]=useState(0)
  return (
    <div>
      <h2>useState Hook {data}</h2>
      <button onClick={()=>setData(data+1)}>increment</button><br/><br/>
      
      <button onClick={()=>setData(data-1)}>decrement</button>
    </div>
  )
}

export default App

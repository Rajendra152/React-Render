import React,{useState}  from 'react'

export const ParentOne = ({ children }) => {
    const [count,setCount] = useState(0);
    console.log("ParentOne render");
  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>Count - {count}</button>
        {children}
    </div>
  )
}

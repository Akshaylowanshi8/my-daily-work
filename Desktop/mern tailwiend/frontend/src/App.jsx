import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<div className="">
<ul className=" flex justify-center gap-10  bg-[#dfdfdf] text-[#fff] h-[200px] ">

<li className="">home</li>
<li className="">about</li>
<li className="">contect</li>
<li className="">Login</li>
<li className="">signin</li>
</ul>
</div>


</>
)
}

export default App

import { useState } from 'react'
import './App.css'
import { Child } from './Components/Child'

function App() {
  const [data, setData] = useState("")
  const [dataArr, setdataArr] = useState([])

  function handelChange(event) {
    let value = event.target.value;
    setData(value)
  }

  function handelSubmit(event) {
    setdataArr((prev)=> [...prev, data])
  }

  return (
    <>
      <input name='name' type='text' value={data} onChange={handelChange} />
      <button onClick={handelSubmit}>Submit</button>
      <Child data={dataArr}/>
    </>
  )
}

export default App

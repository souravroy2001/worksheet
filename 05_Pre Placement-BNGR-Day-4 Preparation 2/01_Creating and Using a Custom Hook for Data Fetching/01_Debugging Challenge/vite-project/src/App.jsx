import { useState } from 'react'
import './App.css'
import PostsList from './components/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PostsList/>
    </>
  )
}

export default App

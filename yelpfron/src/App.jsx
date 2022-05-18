import { BrowserRouter, Route, Routes } from "react-router-dom"
import Reiew from "./components/Reiew"
import Todo from "./components/Todo"



function App() {
  

  return (
   <BrowserRouter>
   <div>

   <Routes>
    <Route path="/rew/:id" element={<Reiew/>} exact/>
    <Route path="/" element={<Todo/>} exact/>
   </Routes>
   </div>
   
   </BrowserRouter>
  )
}

export default App

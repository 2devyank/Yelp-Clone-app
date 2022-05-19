import { BrowserRouter, Route, Routes } from "react-router-dom"
import Reiew from "./components/Reiew"
import Todo from "./components/Todo"
import Update from "./components/Update"



function App() {
  

  return (
   <BrowserRouter>
   <div>

   <Routes>
    <Route path="/rew/:id/:na" element={<Reiew/>} exact/>
    <Route path="/" element={<Todo/>} exact/>
    <Route path="/update/:name/:loc/:pric/:id" element={<Update/>} exact/>
   </Routes>
   </div>
   
   </BrowserRouter>
  )
}

export default App

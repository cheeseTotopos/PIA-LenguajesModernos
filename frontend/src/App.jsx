import react from "react"
import {BrowserRouter, Routes, Route, Navigation} from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home" 
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"

function Logout(){
  localStorage.clear()
  return <Navigate to="/login" />
}

function App() {

  return (
    <>
  
    </>
  )
}

export default App

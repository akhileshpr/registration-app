import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import MainPage from "./Pages/MainPage"
import Dashboard from "./Pages/Dashboard"

function App() {

  return (
    <>
    <Header/>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/" element={<MainPage/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>

    </Routes>
  
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Add from './components/Add'
import List from './components/List'

function App() {
  const [success,setSuccess]=useState("")

  return (
    <>
      <nav className="navbar navbar-expand navbar-light" style={{backgroundColor:'#F98866',minWidth:'100vh'}}>
        <a className="navbar-brand ms-4" href="">
          {' '}
          <i className="fa-solid fa-utensils me-2"></i>
         <b style={{color:'#FFF2D7'}}> Cookbook</b>
        </a>
      </nav>

      <div className="container-fluid" style={{backgroundColor:'#FFF2D7',minHeight:'100vh',minWidth:'100vh'}}>
        <Add val={setSuccess}/>
        <List success={success}/>
      </div>
    </>
  )
}

export default App

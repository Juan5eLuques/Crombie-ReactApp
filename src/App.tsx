import { useState, useEffect} from 'react'
import './App.css'
import { ListProduct } from './components/ListProduct'
import logoCrombie from './assets/image-crombie.png'

function App() {

  return (
    <div className="App">
      <div className='logo-container'>
        <a href='#'>
          <div className='logo-title'>
            <img className='logo' src={logoCrombie}></img>
            <h4>Crombie</h4>
          </div>
        </a>
      </div>
      <h1><strong> Products </strong> </h1>
      <div className='content-container'>
        <ListProduct/>
      </div>
    </div>
  )
}

export default App

/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Device from './components/Device/Device'
import Watch from './components/Watch/Watch'
import Knob from './components/Knob/Knob'

function App() {
  
  return (
    <div className='App'>
      <Knob steps="456"></Knob>
      <Device name="uphone"></Device>
      <Device></Device>
      <Watch ></Watch>
   
    </div>
  )
}

export default App

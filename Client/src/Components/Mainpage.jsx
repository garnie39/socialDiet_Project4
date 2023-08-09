import React from 'react'
import DailyRecord from './DailyRecord'

function Mainpage() {
  return (
    <div>
        <hr/>
        <h1>main page  </h1>
        <p>Once user loged in this page show </p>
        <ul>
            <li>Here is Dailyrecode.jsx</li>
            <DailyRecord />
    
        </ul>
        <br/>
        <ul>
            <p>Create nav bar to click some button</p>
            <li>Program create <button>Avtivity</button></li>
            <li>Graph show <button>Graph</button></li>
            <li>user input? <button>input ?</button></li>
        </ul>
    </div>
  )
}

export default Mainpage
import React from 'react';
import '../../App.css'
import Timer from '../Timer/Timer';

function App():JSX.Element {
  return(<div className="container">
    <h1 className="Heading">TIMER APPLICATION</h1>
    <Timer/>
    </div>    
  )
}

export default App;

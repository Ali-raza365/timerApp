import React from 'react';
import './TimerBtn.css'
 interface AppProps {
    buttonValue: string
 }

const TimerButton = (props:any) :JSX.Element => (
    return( <div>
        <button className="button" {...props} >
            {props.buttonValue}
        </button>
    </div>
    )
);


export default TimerButton
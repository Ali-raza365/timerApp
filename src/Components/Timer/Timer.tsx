import React, { useState, useEffect } from 'react'
import './Timer.css';
import Button from '../../TimerButton/TimerButton'


let timerId: ReturnType<typeof setInterval>;

const Timer = () :JSX.Element => {
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
    const [timerSeconds, setTimerSeconds] = useState<number>(0);

    useEffect(() => {
        return () => clearInterval(timerId);
    }, []);

    const startTimer = ():void => {
        timerId = setInterval(() => {
            setTimerSeconds(prevtimerSeconds => prevtimerSeconds + 1)
        }, 1000);
    }

    const toggleTimer = ():void => {
        setIsTimerRunning(prevIsTimerRunning => !prevIsTimerRunning);
        if (!isTimerRunning) {
            startTimer(); 
        }
        else {
            clearInterval(timerId);
        }
    }

    const resetTimer = ():void => {
        setTimerSeconds(0);
    }

    return (
        <div className="timer">
            
                <div className="timer-circle">
                    <h1 role="timer" className="">{new Date(timerSeconds * 1000).toISOString().substr(11, 8)}</h1>
                </div>
            
            <div className="button-wrapper">

                <Button 
                    data-testid="stop"
                    buttonValue='Stop'
                    role="button"
                    onClick={toggleTimer}
                    disabled={!isTimerRunning}>
                    STOP
                </Button>

                <Button 
                    data-testid="start"
                    role="button"
                    buttonValue='start'
                    onClick={toggleTimer}
                    disabled={isTimerRunning}>
                    START
                </Button>

                <Button 
                    data-testid="reset"
                    role="button"
                    buttonValue='Reset'
                    onClick={resetTimer}
                    disabled={isTimerRunning}>
                    RESET
                </Button>
            </div>
        </div>
    )
}

export default Timer
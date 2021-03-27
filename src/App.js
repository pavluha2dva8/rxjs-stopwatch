import React, { useEffect, useState } from "react";
import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

function App() {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [timerStatus, setTimerStatus] = useState(false)
    const [buttonStatus, setButtonStatus] = useState('Start')


    useEffect(() => {
        !timerStatus ? setButtonStatus('Start') : setButtonStatus('Stop')

        const destroy$ = new Subject()

        // Set Interval 1s, I can use interval(1000) that returns observable,
        // but in task need to use new Observable.
        const observable = new Observable(observer => {
            setInterval(() => observer.next(), 1000)
        })
        observable.pipe(takeUntil(destroy$))
            .subscribe(() => {
                if (timerStatus) {
                    setSeconds(prev => ++prev)
                }
            })
        return () => {
            destroy$.next()
            destroy$.complete()
        }

    }, [timerStatus])

    const start = () => {
        setTimerStatus(prevState => !prevState)
        if (buttonStatus === 'Stop') setSeconds(0)
    }

    const wait = () => {
        if (seconds !== 0) setTimerStatus(false)
    }

    const reset = () => {
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        if (seconds !== 0) setTimerStatus(true)
    }
    if (seconds === 60) {
        setSeconds(0)
        setMinutes(prev => ++prev)
    }
    if (minutes === 60) {
        setMinutes(0)
        setHours(prev => ++prev)
    }

    return (
        <div className='container'>
            <div className='display'>
                <Display hours={hours} minutes={minutes} seconds={seconds} />
            </div>
            <div className='buttons'>
                <Buttons start={start} wait={wait} reset={reset} buttonStatus={buttonStatus} />
            </div>


        </div>
    )
}

export default App
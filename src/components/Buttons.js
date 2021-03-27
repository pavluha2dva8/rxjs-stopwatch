import {fromEvent,} from 'rxjs';
import {map, buffer, debounceTime, filter} from 'rxjs/operators';
import {useEffect} from "react";
import '../App.css';

const Buttons = (props) => {
    // Double click
    useEffect(() => {
        const mouse$ = fromEvent(document.getElementById('clickMe'), 'click')

        const buff$ = mouse$.pipe(
            debounceTime(250),
        )

        const click$ = mouse$.pipe(
            buffer(buff$),
            map(list => {
                return list.length;
            }),
            filter(x => x === 2),
        )

        click$.subscribe(() => {
            props.wait()
        })
    }, [props]);

    return (
        <div>
            <button className='button' onClick={props.start}>{props.buttonStatus}</button>
            <button className='button' id="clickMe">Wait</button>
            <button className='button' onClick={props.reset}>Reset</button>
        </div>
    )
}

export default Buttons
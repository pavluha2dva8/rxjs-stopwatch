import '../App.css';

const Display = (props) => {

    return (
        <div>
            <span>{(props.hours >= 10) ? props.hours : '0' + props.hours}</span>:
            <span>{(props.minutes >= 10) ? props.minutes : '0' + props.minutes}</span>:
            <span>{(props.seconds >= 10) ? props.seconds : '0' + props.seconds}</span>
        </div>
    )
}

export default Display
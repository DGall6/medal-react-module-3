export default function Medal(props) {
    return (
        <div className="medal">
            <header>
                <h5>{props.name} Medals </h5>
            </header>
            <div>
                <button disabled={props.country[props.name.toLowerCase()] <= 0} onClick={() => props.handleDecrement(props.country.id, props.name.toLowerCase())}>-</button>
                <p>{props.country[props.name.toLowerCase()]}</p>
                <button onClick={() => props.handleIncrement(props.country.id, props.name.toLowerCase())}>+</button>
            </div>
        </div>
    )
};
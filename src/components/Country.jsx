export default function Country(props) {
    return (
        <div className="country">
            <header className="header">
                <h3>{props.country.name}</h3>
                <button className="btn" onClick={() => props.onDelete(props.country.id)}>X</button>
            </header>
            <p>
                Gold Medals: {props.country.gold}
            </p>
        </div>
    )
}
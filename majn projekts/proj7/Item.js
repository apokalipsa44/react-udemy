const Item = (props) => {
    return (
        <li style={props.active ? {fontWeight: 'bold'} : {color: 'red'}}
            onClick={() => props.changeStatus(props.id)}>{props.name}</li>
    )
}

// wywołuje funkcję anonimową strzałkową bo jak daje nawiasy z props.id w środku to wywoła mi funkcje bez kliknięcia i
// onclick nie działa wtedy wogóle props.changeStatus(...) nawiasy wywołaja funkcję od razu
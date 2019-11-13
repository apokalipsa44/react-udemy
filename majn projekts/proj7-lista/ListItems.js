const ListItems = (props) => {
    // robimy zlistę <Itemów> z listy itemów i przenosimy właściwości i metodę
    const items = props.items.map(item =>
        <Item key={item.id}
              name={item.name}
              id={item.id}
              active={item.active}
              changeStatus={props.changeStatus}></Item>)
    return (
        <ul>
            {items}
        </ul>
    )
}
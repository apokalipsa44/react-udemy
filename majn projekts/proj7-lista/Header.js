const Header = (props) => {
    const selectedItems=props.items.filter(item=> item.active)
    return(
        <div>
            <h2>Podsumowanie zamówienia {selectedItems.length}</h2>
            <h3>Do zapłaty: {selectedItems.length ? `${selectedItems.length*10}`: 'nic nie płacisz'}</h3>
        </div>
    )
}
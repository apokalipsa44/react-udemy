class App extends React.Component {
    state = {
        items: [
            {id: 1, name: "czaj", active: true},
            {id: 2, name: "weed", active: true},
            {id: 3, name: "charcoal", active: true},
            {id: 4, name: "onion", active: true},
            {id: 5, name: "sand", active: false},
            {id: 6, name: "shit", active: true},
            {id: 7, name: "soup", active: true},
        ]
    }

    handleChangeStatus=(id)=>{
        console.log(id)
const newItemsForChangeActive=this.state.items.map(item=>{
    if(id===item.id){
        item.active=!item.active
    }
        return item

    })
    this.setState({
        items: newItemsForChangeActive
})

    }

    render() {
        return (
            <>
<Header items={this.state.items}/>

                {/*changeStatus={this.handleChangeStatus()}   --> czyli przenosi do list items metodę handleChangStatus*/}
<ListItems items={this.state.items} changeStatus={this.handleChangeStatus}/>


            </>
        );
    }

}
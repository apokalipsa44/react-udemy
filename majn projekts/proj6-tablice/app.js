const data = {
    users: [
        {
            id: 1,
            name: "judek",
            age: 15,
            sex: "male"
        },
        {
            id: 2,
            name: "kuba",
            age: 33,
            sex: "male"
        },
        {
            id: 3,
            name: "sterfan",
            age: 34,
            sex: "female"
        },
        {
            id: 4,
            name: "sterfania",
            age: 44,
            sex: "female"
        }
    ]
}
// wyciąga w tych klamerkach tylko users z propsów
const Item = ({user}) => (
    <div>
        <h1>user name is {user.name}</h1>
        <h2>age is {user.age}</h2>
        <h2>user sex is <strong>{user.sex}</strong></h2>
    </div>
)


class App extends React.Component {
    state = {
        select: "all"
    }

    usersList = () => {
        let users = this.props.data.users
        switch (this.state.select) {
            case "all": {
                users = users.map(user => <Item key={user.id} user={user}/>)
                return users
            }
            case "men": {
                users = users.filter((user) => user.sex === "male")
                users = users.map(user => <Item key={user.id} user={user}/>)
                return users
            }
            case "women": {
                users = users.filter((user) => user.sex === "female")
                users = users.map(user => <Item key={user.id} user={user}/>)
                return users
            }
        }
    }

    handleUsersFilter(option) {
        this.setState({
            select: option
        })
    }

    render() {
        // let users = this.props.data.users
        // // filtruje na mniejszą tablicę i ją wyświetla po Items
        // const Items = users.map(user => <Item key={user.id} user={user}/>)
        return (
            <>
                <button onClick={this.handleUsersFilter.bind(this, "all")}>All</button>
                <button onClick={this.handleUsersFilter.bind(this, "women")}>Women</button>
                <button onClick={this.handleUsersFilter.bind(this, "men")}>Men</button>
                {this.usersList()}

            </>
        );
    }
}

ReactDOM.render(<App data={data}/>, document.getElementById('root'))

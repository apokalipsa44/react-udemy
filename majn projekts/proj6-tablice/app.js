const data = {
    users: [
        {
            id: 1,
            name: "judek",
            age: 15
        },
        {
            id: 2,
            name: "kuba",
            age: 33
        },
        {
            id: 3,
            name: "sterfan",
            age: 34
        }
    ]
}
// wyciąga w tych klamerkach tylko users z propsów
const Item = ({user}) => (
    <div>
        <h1>user name is {user.name}</h1>
        <h2>age is {user.age}</h2>
    </div>
)


class App extends React.Component {
    state = {}


    render() {
        const users = this.props.data.users
        const Items = users.map(user => <Item key={user.id} user={user}/>)
        return (
            <>
                {Items}
            </>
        );
    }
}

ReactDOM.render(<App data={data}/>, document.getElementById('root'))

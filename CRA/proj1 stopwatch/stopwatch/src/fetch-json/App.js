import React, {Component} from "react";

class App extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        const xmlHttpRequest = new XMLHttpRequest()
        xmlHttpRequest.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
        xmlHttpRequest.onload = () => {
            console.log(xmlHttpRequest.status)
            console.log(xmlHttpRequest.response)
            const users = JSON.parse(xmlHttpRequest.response)
            this.setState({
                users: users
            })
        }

        xmlHttpRequest.send()
    }

    render() {
        const usersMap = this.state.users.map(user => (
            <div key={user.id}>
               <li>{user.name}</li>
                <li>{user.email}</li>
                <br/>
            </div>
            )
        )

        return (
            <>
                {usersMap}
            </>
        )
    }
}

export default App;




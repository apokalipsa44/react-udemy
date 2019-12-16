import React, {Component} from "react";
import AddUserBtn from "./components/AddUserBtn";
import UserLine from "./components/UserLine";

class App extends Component {
    state = {
        users: []
    }

    handleAddUser = () => {
        console.log("click")
        const api = "https://randomuser.me/api/?results=1"
        fetch(api)
            .then(response => response.json())
            .then(results => {
                const user = results.results
                this.setState(prevState => ({
                    users: prevState.users.concat(user)
                }))

            })
            .catch("Error sie zrobił")

    }

    render() {

        return (
            <>
                <AddUserBtn click={this.handleAddUser}/>
                <UserLine users={this.state.users}/>

            </>
        )
    }
}

export default App;




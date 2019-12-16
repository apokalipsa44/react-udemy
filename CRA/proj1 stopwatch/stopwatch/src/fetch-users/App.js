import React, {Component} from "react";
import AddUserBtn from "./components/AddUserBtn";
import UserLine from "./components/UserLine";

class App extends Component {
    state = {
        users: []
    }

    componentDidMount() {


    }

    render() {
        const usersMap = this.state.users.map(user => (
           null
            )
        )

        return (
            <>
               <AddUserBtn/>
               <UserLine/>
            </>
        )
    }
}

export default App;




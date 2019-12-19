import React, {Component} from "react";
import "./App.css"


class App extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        checked: ""
    }


    render() {

        return (
            <>
                <form>
                    <label htmlFor="user">Enter username
                        <input type="text" id="user" name="username" value={this.state.username}
                               onChange={this.handleOnChange}/>
                    </label>
                    <label htmlFor="email">Enter email
                        <input type="email" id="email" name="email" value={this.state.email}
                               onChange={this.handleOnChange}/>
                    </label>
                    <label htmlFor="password">Enter password
                        <input type="password" id="password" name="password" value={this.state.password}
                               onChange={this.handleOnChange}/>
                    </label>


                </form>

            </>
        )
    }

    handleOnChange=(e)=> {
        console.log(e.target)
        const name = e.target.name
        const type = e.target.type

        this.setState({
            [name]: e.target.value
        })
    }
}

export default App;




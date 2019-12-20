import React, {Component} from "react";
import "./App.css"


class App extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        checked: false,

        errors: {
            username_err: false,
            email_err: false,
            password_err: false,
            checked_err: false
        }
    }


    messages = {
        username_fail: "bad usernamme",
        email_fail: "bad email",
        password_fail: "bad passowrd",
        checkbox_fail: "check the checkbox"
    }


    render() {

        return (
            <>
                <form onSubmit={this.handleSubmit} noValidate={true}>
                    <label htmlFor="user">Enter username
                        <input type="text" id="user" name="username" value={this.state.username}
                               onChange={this.handleOnChange}/>
                    </label>
                    {this.state.errors.username_err && <span>{this.messages.username_fail}</span>}
                    <label htmlFor="email">Enter email
                        <input type="email" id="email" name="email" value={this.state.email}
                               onChange={this.handleOnChange}/>
                    </label>
                    {this.state.errors.email_err && <span>{this.messages.email_fail}</span>}
                    <label htmlFor="password">Enter password
                        <input type="password" id="password" name="password" value={this.state.password}
                               onChange={this.handleOnChange}/>
                    </label>
                    {this.state.errors.password_err && <span>{this.messages.password_fail}</span>}
                    <label htmlFor="checkbox">
                        <input type="checkbox" id="accept" name="accept" checked={this.state.checked}
                               onChange={this.handleOnChange}/>check this out!
                    </label>
                    {this.state.errors.checked_err && <span>{this.messages.checkbox_fail}</span>}
                    <button>save</button>

                </form>

            </>
        )
    }

    handleOnChange = (e) => {

        // console.log(e.target)
        const name = e.target.name
        const type = e.target.type
        if (type === "password" || type === "email" || type === "text") {
            this.setState({
                [name]: e.target.value
            })
        } else if (type === "checkbox") {
            this.setState({
                checked: e.target.checked
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.validateForm()

    }


    validateForm() {
        console.log("validateForm")
        let usernameErr = false
        let emailErr = false
        let passErr = false
        let checkboxErr = false
        if (this.state.username.length < 6) {
            usernameErr = true
        }
        if (this.state.email.indexOf('@') === -1) {
            emailErr = true
        }
        if (this.state.password.length < 4) {
            passErr = true
        }
        if (this.state.checked === false) {
            checkboxErr = true
        }
        this.setState({

            errors: {
                username_err: usernameErr,
                email_err: emailErr,
                password_err: passErr,
                checked_err: checkboxErr
            }
        })


    }
}

export default App;




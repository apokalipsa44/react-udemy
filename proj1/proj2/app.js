class App extends React.Component {
    state = {
        value: ''
    }

    handleClick = () => {
        this.setState({
            value: ""
        })
    }

    handleInputChange = (event) => {

        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <>
                <input placeholder="gucio" onChange={this.handleInputChange} value={this.state.value}></input>
                <button onClick={this.handleClick}>Reset</button>
                <h1>{this.state.value}</h1>
            </>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('root'))
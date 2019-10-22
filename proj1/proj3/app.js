class App extends React.Component {
    state = {
        counter: 0,
        score: 0
    }

    handleClick = (type) => { 
        if (type === "plus") {
            this.setState(prevState => ({
                counter: prevState.counter + 1,
                score: prevState.score + 1
            }))
        }
        else if (type === 'minus') {
            this.setState(prevState => ({
                counter: prevState.counter + 1,
                score: prevState.score - 1
            }))
        }
        else if (type === 'reset') {
            this.setState(prevState => ({
                counter: prevState.counter + 1,
                score: 0
            }))
        }

    }

    render() {
       
        return (
            <>
            {/* albo tak */}
                <MyButton name="+188" type="plus" click={this.handleClick} />
                <MyButton name="-666" type="minus" click={this.handleClick} />
                <MyButton name="+1500" type="plus" click={this.handleClick} />

                {/* albo tak */}
                <button onClick={this.handleClick.bind(this, "plus")}>+1</button>
                <button onClick={this.handleClick.bind(this, "reset")}>reset</button>
                <button onClick={() => this.handleClick("minus")}>-1</button>
                
                
                
                <h1>Counter: {this.state.counter} {this.state.counter>6 ? "wiecej niż szesc": null}</h1>
                <h1>Score: {this.state.score}</h1>
            </>
        );
    }

}
const MyButton = (props) => {
    
    
    return (
        <button onClick={() => props.click(props.type)}>{props.name}</button>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
class App extends React.Component {
    state = {
        availableProducts: 7,
        ordered: 0
    }

    handleRemoveFromCart = () => {
        this.setState({
            ordered: this.state.ordered - 1
        })
    }

    handleAddToCart = () => {
        this.setState({
            ordered: this.state.ordered + 1
        })
    }

    render() {
        return (
            <>
                {/*//jak dojdzie do zera to disabld =true, w przecinyym razie false*/}
                <button disabled={this.state.ordered === 0 ? true : false} onClick={this.handleRemoveFromCart}>-
                </button>
                <span> {this.state.ordered} </span>
                <button disabled={this.state.ordered === this.state.availableProducts ? true : false}
                        onClick={this.handleAddToCart}>+
                </button>
            </>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('root'))

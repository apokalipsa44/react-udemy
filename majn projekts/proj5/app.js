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

    handleBuy = () => {
        this.setState({
            availableProducts: this.state.availableProducts - this.state.ordered,
            ordered: 0
        })
    }

    render() {
        const {ordered, availableProducts}=this.state
        return (

            <>
                {/*//jak dojdzie do zera to disabld =true, w przecinyym razie false*/}
                <button disabled={ordered === 0 ? true : false} onClick={this.handleRemoveFromCart}>-
                </button>
                <span style={ordered === 0 ? {opacity: 0.3} : {opacity: 1}}> {ordered} </span>
                <button disabled={ordered === availableProducts ? true : false}
                        onClick={this.handleAddToCart}>+
                </button>
                {ordered > 0 ? <button onClick={this.handleBuy}>kup mje</button> : false}
                <br></br>
                Available products: {availableProducts}
            </>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('root'))

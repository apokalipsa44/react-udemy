const Dollars = (props) => (
    <div>Dollars value: {(props.cash / props.ratio).toFixed(2)}</div> //toFixed - zaokrągla
)

const Euros = (props) => (
    <div>Euros value:  {(props.cash / props.ratio).toFixed(2)}</div>
)

class Euro extends React.Component {
    state = {
        amount: "",
        ratioDollar: 3.2,
        ratioEuro: 4.3
    }

    handleRatio = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    render() {
        return (
            <div className="app">
                <label>
                    <input type="number" value={this.state.amount} onChange={this.handleRatio}/>
                </label>

                <Dollars cash={this.state.amount} ratio={this.state.ratioDollar}/>
                <Euros cash={this.state.amount} ratio={this.state.ratioEuro}/>

            </div>
        )
    }
}

ReactDOM.render(<Euro/>, document.getElementById('root'))

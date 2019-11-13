class Form extends React.Component {
    state = {
        city: "marakesz",
        text:"",
        isLoved: true,
        visits: 2
    }

    handleCityChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    handleIsLovedChange = (e) => {
        this.setState({
            isLoved: e.target.checked
        })
    }

    handleVisitsNumberChange=(e)=>{
        this.setState({
            visits:e.target.value
        })
    }

    render() {
        return (
            <>
                <label>podaj city: <input type="text" value={this.state.city} name="city" onChange={this.handleCityChange}/></label>
                <br/>
                <label>podaj email: <textarea type="text" value={this.state.text} onChange={this.handleTextChange}/></label>
                <br/>
                <label>Kumasz? <input type="checkbox" checked={this.state.isLoved}
                                      onChange={this.handleIsLovedChange}/></label>
                <br/><label>Ile wizyt? </label>
                <select value={this.state.visits} onChange={this.handleVisitsNumberChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="10">10</option>
                <option value="more">more</option>
                </select>
                <br/>
                <button>Save</button>
            </>
        )
    }
}

ReactDOM.render(<Form/>, document.getElementById('root'))

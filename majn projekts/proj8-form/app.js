class Form extends React.Component {
    state = {
        city: "marakesz",
        text: "",
        isLoved: true,
        visits: 2
    }

    // handleCityChange = (e) => {
    //     this.setState({
    //         city: e.target.value
    //     })
    // }
    // handleTextChange = (e) => {
    //     this.setState({
    //         text: e.target.value
    //     })
    // }
    // handleIsLovedChange = (e) => {
    //     this.setState({
    //         isLoved: e.target.checked
    //     })
    // }
    //
    // handleVisitsNumberChange=(e)=>{
    //     this.setState({
    //         visits:e.target.value
    //     })
    // }

    // albo jedna metooda

    handleChange = (e) => {
        console.log(e.target.type);
        if (e.target.type === "checkbox") {
            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {

            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    render() {
        return (
            <>
                <label>podaj city: <input name="city" type="text" value={this.state.city} name="city"
                                          onChange={this.handleChange}/></label>
                <br/>
                <label>podaj email: <textarea name="text" type="text" value={this.state.text}
                                              onChange={this.handleChange}/></label>
                <br/>
                <label>Kumasz? <input name="isLoved" type="checkbox" checked={this.state.isLoved}
                                      onChange={this.handleChange}/></label>
                <br/><label>Ile wizyt? </label>
                <select name="visits" value={this.state.visits} onChange={this.handleChange}>
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

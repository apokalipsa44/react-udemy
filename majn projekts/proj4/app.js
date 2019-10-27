class App extends React.Component {
    state = {
        value: '',
        isAdult: false,
        isSubmitted: false
    }

    handleCheckBoxChange = () => {
        this.setState({
            isAdult: !this.state.isAdult,
            isSubmitted: false
        })

    }

    displayMassage = () => {
        if (this.state.isSubmitted) {
            if (this.state.isAdult) {
                return <ValidationMessage type={'positive'}/>
            } else if (!this.state.isAdult) {
                return <ValidationMessage type={'negative'}/>
            }
        } else {
            return null;
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        if (!this.state.isSubmitted) {
            this.setState({
                isSubmitted: true
            })
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleFormSubmit}>
                    <h1>Kup bilet na horror roku!</h1>
                    <input type="checkbox" onChange={this.handleCheckBoxChange} id="age"
                           checked={this.state.isAdult}></input>
                    <label htmlFor="age">Mam conajmniej 16 lat</label>
                    <br></br>
                    <button type="submit">Kup bilet</button>
                </form>
                {this.displayMassage()}
            </>
        );
    }

}
const ValidationMessage=(props)=>{
    if(props.type==='positive'){
    return <p>ssij</p>
    } if (props.type==='negative'){
        return <p>nie ssij</p>
    }
}

// const PositiveMessage = () => <p>masz 16 lat</p>
//
// const NegaiveMessage = () => <p>nie masz 16 lat...</p>

ReactDOM.render(<App/>, document.getElementById('root'))

class App extends React.Component {
    state = {
        textToRender: ''
    }

    handleClick() {
        this.setState({
            textToRender: this.state.textToRender + 'a'
        })

    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleClick.bind(this)}>Dodaj literkem</button>
                <PanelResult text={this.state.textToRender} />
            </React.Fragment>
        );
    }
}

const PanelResult = (props) => {
return(
    <h1>{props.text}</h1>
)
}
ReactDOM.render(<App />, document.getElementById('root'))
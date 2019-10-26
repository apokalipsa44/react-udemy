class App extends React.Component {
    state = {
        value: ''
    }

    handleClick = () => {
        
    }

   
    render() {
        return (
            <>
            <h1>Kup bilet na horror roku!</h1>
            <input type="checkbox" id="age"></input>
            <label htmlFor="age">Mam conajmniej 16 lat</label>
               </>
        );
    }

}
const PositiveMessage = ()=>{
    <p>masz 16 lat</p>
}

const  NegaiveMessage=()=>{
    <p>nie masz 16 lat...</p>
}

ReactDOM.render(<App />, document.getElementById('root'))
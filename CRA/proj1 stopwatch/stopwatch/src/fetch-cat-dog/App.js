import React, {Component} from 'react';
import './App.css';
import Line from './components/Line';

class App extends Component {
    state = {
        words: []
    }

 componentDidMount(): void {
        fetch('data/words.json')
            .then(response=>response.json())
            .then(response=> {
                this.setState({
                    words:response.words
                })
            })
 }

    render() {
        const words = this.state.words.map(word => (
            <Line eng={word.en} pol={word.pl}/>
        ))

        return (<>
                {words}
            </>


        )
    }

}

export default App;


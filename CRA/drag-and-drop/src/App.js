import React from 'react';
import './App.css';
import Board from "./Board";
import Element from "./Element";

function App() {
    return (
        <div className="App">
            <main className="flexbox">
                <Board id="board1" className="board">

                </Board>
                <Board id="board2" className="board">
                    <Element id="task1" className="element" draggable="true"><p>ssij</p></Element>
                    <Element id="task2" className="element" draggable="true"><p>nie ssij</p></Element>
                </Board>
            </main>
        </div>

    );
}

export default App;

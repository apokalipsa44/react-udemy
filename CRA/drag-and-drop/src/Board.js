import React from 'react';

function Board  (props) {
    const drop = e => {
        e.preventDefault()
        console.log(e)
        const card_id = e.dataTransfer.getData("card_id")
        console.log(e)
        const card = document.getElementById("task1")
        console.log(card)
        card.style.display='block'
        card.appendChild(card)
    }

    const dragOver = e => {
        e.preventDefault()

    }

    return (
        <div id={props.id} className={props.className} onDrag={drop} onDragOver={dragOver}>
            {props.children}
        </div>
    );
};

export default Board;
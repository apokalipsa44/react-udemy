import React from 'react';

function Element (props)  {
    const dragStart = e => {
        const target = e.target
        e.dataTransfer.setData("card_id", target)
        setTimeout(() => {
            target.style.display = "none"
        }, 0)
    }

    const dragOver = e => {
        e.stopPropagation()
    }

    return (
        <div id={props.id} className={props.className} onDragStart={dragStart} onDragOver={dragOver} draggable={props.draggable}>
            {props.children}
        </div>
    );
};

export default Element;
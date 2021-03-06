import React, {Component} from 'react';
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";

const Container = styled.div`
border: 1px solid lightgray;
border-radius: 2px;
padding: 8px;
margin-bottom: 8px;
background-color: ${props => (props.isDragging ? "lightgreen" : "white")};
`


class Task extends Component {
    render() {
        console.log(this.props)
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container  {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                isDragging={snapshot.isDragging}>
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        );
    }
}

export default Task;
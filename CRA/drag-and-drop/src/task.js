import React, {Component} from 'react';
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";

const Container = styled.div`
border: 1px solid lightgray;
border-radius: 2px;
padding: 8px;
margin-bottom: 8px;
`


class Task extends Component {
    render() {
        console.log(this.props)
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided)=>(
                    <Container  {...provided.draggableProps}
                               {...provided.dragHandleProps}
                               ref={provided.innerRef}>
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        );
    }
}

export default Task;
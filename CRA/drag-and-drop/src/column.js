import React, {Component} from 'react';
import styled from "styled-components";
import Task from "./task";
import {Droppable} from "react-beautiful-dnd";


const Container=styled.div`
margin: 8px;
border: 1px solid lightgray;
border-radius: 2px;
`
const Title=styled.h3`
padding: 8px;
`
const TaskList=styled.div`
padding: 8px;
`


class Column extends Component {


    render() {

        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable  droppableId={this.props.column.id} >
                    {provided=>(
                        <TaskList  {...provided.droppableProps}
                                   ref={provided.innerRef}>
                            {this.props.tasks.map((task, index)=>{
                                    console.log(task)
                                    console.log(index)
                                    return <Task key={String(task.id)} task={task} index={index}/>
                            })}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        );
    }
}

export default Column;
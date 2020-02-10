import React, {Component} from 'react';
import initialData from "./initialData";
import Column from "./column";
import {DragDropContext} from "react-beautiful-dnd";

class App extends Component {
    state = initialData

    onDragEnd = result => {

    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                {this.state.columnOrder.map(columnId => {
                    const column = this.state.columns[columnId]
                    const tasks = column.tasksIDs.map(taskId => this.state.tasks[taskId])

                    return <Column key={String(column.id)} column={column} tasks={tasks}/>
                })}
            </DragDropContext>
        )
    }
}

export default App;

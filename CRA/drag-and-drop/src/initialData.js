const initialData = {
    tasks: {
        "task-1": {id: "task-1", content: "do some shit"},
        "task-2": {id: "task-2", content: "more shit"},
        "task-3": {id: "task-3", content: "getriebe gemache"},
        "task-4": {id: "task-4", content: "take th gbagee"},
        "task-5": {id: "task-5", content: "eat soup"},
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "todo",
            tasksIDs: ["task-1", "task-2", "task-3", "task-4", "task-5"]
        }
    },
    columnOrder:["column-1"]
}
export default initialData;
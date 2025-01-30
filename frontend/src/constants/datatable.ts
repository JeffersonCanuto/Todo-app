import { TodoProps } from "../@types/props";

interface ColumnsItems {
    name: string;
    label: string;
    options: {
        filter: boolean;
        sort: boolean
    }
}

interface StyleItems {
    completedBtn: {
        unclickedColor: string;
        clickedColor: string
    },
    pendingBtn: {
        unclickedColor: string;
        clickedColor: string
    }
}

/* Customized data for MUIDataTable entry */
const customData = (todos: TodoProps[] | []):(number | string | boolean)[][] => {
    return todos.map(todo => [ todo.id, todo.title, todo.description, todo.pending, todo.actions ]);
}

/* Customized columns for MUIDataTable entry */
let customColumns:ColumnsItems[] = [
    {
        name: "index",
        label: "INDEX",
        options: {
            filter: true,
            sort: true
        }
    },
    {
        name: "title",
        label: "TITLE",
        options: {
            filter: true,
            sort: true
        }
    },
    {
        name: "description",
        label: "DESCRIPTION",
        options: {
            filter: true,
            sort: true
        }
    },
    {
        name: "status",
        label: "STATUS",
        options: {
            filter: false,
            sort: false
        }
    },
    {
        name: "actions",
        label: "ACTIONS",
        options: {
            filter: false,
            sort: false
        }
    }
];

/* Customized styles for DataTable component */
const tableStyles:StyleItems = {
    completedBtn: {
        unclickedColor: "initial",
        clickedColor: "#00b300"
    },
    pendingBtn: {
        unclickedColor: "initial",
        clickedColor: "#e60000"
    }
}

export {
    customData,
    customColumns,
    tableStyles
}
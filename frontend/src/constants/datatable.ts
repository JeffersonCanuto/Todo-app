import { createTheme } from "@mui/material/styles";
import { TodoProps } from "../@types/props";

/* Interfaces for typing columns and styles */
interface ColumnsItems {
    name: string;
    label: string;
    options: {
        filter: boolean;
        sort: boolean
    }
}

interface StylesItems {
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
const tableStyles:StylesItems = {
    completedBtn: {
        unclickedColor: "#737373",
        clickedColor: "#00e600"
    },
    pendingBtn: {
        unclickedColor: "#737373",
        clickedColor: "#e60000"
    }
}

/* Customized themes for DataTable component */
const tableThemes = (todosLength:number) => {
    return createTheme({
        components: {
            MuiTypography: {
                styleOverrides: {
                    root: {
                        color: "#737373",
                        fontSize: "16px"
                    }
                }
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: "#737373"
                    }
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        color: "#737373"
                    },
                    head: {
                        "&:nth-of-type(1)": {
                            position: "relative",
                            left: "15px"   
                        },
                        "&:nth-of-type(2)": {
                            position: "relative",
                            left: "15px"
                        },
                        "&:nth-of-type(3)": {
                            position: "relative",
                            left: todosLength === 0 ? "0px" : "75px"
                        }
                    }
                }
            },
            MuiTablePagination: {
                styleOverrides: {
                    displayedRows: {
                        color: "#737373"
                    },
                    actions: {
                        color: "#737373"
                    }
                }
            }
        }
    });
}
export {
    customData,
    customColumns,
    tableStyles,
    tableThemes
}
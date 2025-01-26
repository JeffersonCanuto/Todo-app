import React, { useState, useCallback }from "react";

import Box from '@mui/material/Box';
import Tooltip from "@mui/material/Tooltip";

import { 
    createTheme, 
    StyledEngineProvider, 
    ThemeProvider 
} from "@mui/material/styles";

import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { PiPlusBold } from "react-icons/pi";
import { BsTrash } from "react-icons/bs";

import MUIDataTable, { MUIDataTableMeta } from "mui-datatables";

import { TodoProps } from "../@types/props"; 

interface TodoItems {
    todos: TodoProps[] | []
}

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

let columns:ColumnsItems[] = [
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

const style:StyleItems = {
    completedBtn: {
        unclickedColor: "initial",
        clickedColor: "#00b300"
    },
    pendingBtn: {
        unclickedColor: "initial",
        clickedColor: "#e60000"
    }
}

const customizeData = (todos: TodoProps[] | []):(string | boolean)[][] => {
    return todos.map(todo => {
        const {
            title,
            description,
            status,
            actions
        } = todo;

        return [title, description, status, actions];
    });
}

const DataTable:React.FC<TodoItems> = ({ todos }) => {
    const [ rowStates, setRowStates ] = useState<{[key: number]: { completed: boolean; pending: boolean }}>({});
    
    const handleCompletedButton = useCallback((event:React.MouseEvent<HTMLButtonElement>, rowIndex:number) => {
        event.preventDefault();

        setRowStates(state => ({
            ...state,
            [rowIndex]: {
                completed: !state[rowIndex]?.completed,
                pending: false
            }
        }));
    },[rowStates]);

    const handlePendingButton = useCallback((event:React.MouseEvent<HTMLButtonElement>, rowIndex:number) => {
        event.preventDefault();

        setRowStates(state => ({
            ...state,
            [rowIndex]: {
                pending: !state[rowIndex]?.pending,
                completed: false
            }
        }));
    },[rowStates]);

    return (
        <StyledEngineProvider>
            <ThemeProvider theme={createTheme()}>
                <Box style={{ 
                    width: "93%", 
                    minHeight: "400px",
                    margin: "auto"
                }}>
                    <MUIDataTable
                        title="TO-DO LIST"
                        data={customizeData(todos)}
                        columns={columns.map((column:any) => {
                            if (column.name.includes("status")) {
                                return {
                                    ...column, 
                                    options: {
                                        ...column.options,
                                        customBodyRender: (value:boolean, tableMeta:MUIDataTableMeta) => {
                                            const rowIndex = tableMeta.rowIndex;
                                            const rowState = rowStates[rowIndex] || { completed: false, pengding: false}

                                            return value === false && (
                                                <Box style={{
                                                    width: "60px",
                                                    display: "flex",
                                                    justifyContent: "space-between", 
                                                    alignItems: "center"
                                                }}>
                                                    <Tooltip title="Completed">
                                                        <button
                                                            aria-label="check-todo-completed" 
                                                            onClick={event => handleCompletedButton(event, rowIndex)}
                                                        >
                                                            <FaCheck style={{ color: rowState.completed ? style.completedBtn.clickedColor : style.completedBtn.unclickedColor }}/>
                                                        </button>
                                                    </Tooltip>
                                                    <Tooltip title="Pending">
                                                        <button
                                                            aria-label="check-todo-pending"
                                                            onClick={event => handlePendingButton(event, rowIndex)}
                                                        >
                                                            <FaXmark style={{ color: rowState.pending ? style.pendingBtn.clickedColor  : style.pendingBtn.unclickedColor }}/>
                                                        </button> 
                                                    </Tooltip>
                                                </Box>
                                            )
                                        }
                                    }
                                }
                            }
                            if (column.name.includes("actions")) {
                                return {
                                    ...column,
                                    options: {
                                        ...column.options,
                                        customBodyRender: (value:boolean) => {
                                            return value === false && (
                                                <Box style={{ 
                                                    width: "60px", 
                                                    display: "flex", 
                                                    justifyContent: "space-between", 
                                                    alignItems: "center"
                                                }}>
                                                    <Tooltip title="Edit">
                                                        <button aria-label="edit-todo">
                                                            <PiPlusBold />
                                                        </button>
                                                    </Tooltip>
                                                    <Tooltip title="Delete">
                                                        <button atria-label="delete-todo">
                                                            <BsTrash />
                                                        </button>
                                                    </Tooltip>
                                                </Box>
                                            )
                                        }
                                    }
                                }
                            }

                            return column;
                        })}
                        options={{
                            responsive: "standard",
                            rowsPerPage: 5,
                            rowsPerPageOptions: [5],
                            selectableRows: "none"
                        }}
                    />
                </Box>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default DataTable;
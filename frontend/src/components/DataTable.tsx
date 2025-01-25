import React, { useCallback }from "react";

import Box from '@mui/material/Box';
import { 
    createTheme, 
    StyledEngineProvider, 
    ThemeProvider 
} from "@mui/material/styles";

import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { PiPlusBold } from "react-icons/pi";
import { BsTrash } from "react-icons/bs";

import MUIDataTable from "mui-datatables";

import { TodoProps } from "../@types/props"; 

interface Todo {
    todos: TodoProps[] | []
}

let columns = [
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

const DataTable:React.FC<Todo> = ({ todos }) => {
    const handleFinishedButton = useCallback((event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        console.log("Finished!");
    },[]);

    const handleUnfinishedButton = useCallback((event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        console.log("Unfinished!");
    },[]);

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
                                        customBodyRender: (value:boolean) => {
                                            return value === false && (
                                                <div style={{ 
                                                    width: "60px", 
                                                    display: "flex", 
                                                    justifyContent: "space-between", 
                                                    alignItems: "center"
                                                }}>
                                                    
                                                    <button 
                                                        aria-label="check-todo-finished" 
                                                        onClick={handleFinishedButton}
                                                    >
                                                        <FaCheck style={{ color: "default"}}/>
                                                    </button>
                                                    <button 
                                                        aria-label="check-todo-unfinished" 
                                                        onClick={handleUnfinishedButton}
                                                    >
                                                        <FaXmark style={{ color: "default"}} />
                                                    </button>  
                                                </div>
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
                                                <div style={{ 
                                                    width: "60px", 
                                                    display: "flex", 
                                                    justifyContent: "space-between", 
                                                    alignItems: "center"
                                                }}>
                                                    <button aria-label="edit-todo">
                                                        <PiPlusBold />
                                                    </button>
                                                    <button atria-label="delete-todo">
                                                        <BsTrash />
                                                    </button>
                                                </div>
                                            )
                                        }
                                    }
                                }
                            }

                            return column;
                        })}
                        options={{
                            responsive: "standard",
                            rowsPerPage: 5           
                        }}
                    />
                </Box>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default DataTable;
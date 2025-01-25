import React from "react";

import Box from '@mui/material/Box';
import { 
    createTheme, 
    StyledEngineProvider, 
    ThemeProvider 
} from "@mui/material/styles";

import MUIDataTable from "mui-datatables";

import { TodoProps } from "../@types/props"; 

interface Todo {
    todos: TodoProps[] | []
}

const columns = [
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
            sort: false,
            customBodyRender: (value:boolean) => {
                return value === false && (
                    <div style={{ 
                        width: "60px", 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center"
                    }}>
                        <button>Fin</button>
                        <button>Unf</button>
                    </div>
                )
            }
        }
    },
    {
        name: "actions",
        label: "ACTIONS",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value:boolean) => {
                return value === false && (
                    <div style={{ 
                        width: "60px", 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center"
                    }}>
                        <button>Fin</button>
                        <button>Unf</button>
                    </div>
                )
            }
        }
    },
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
                        columns={columns}
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
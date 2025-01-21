import React from "react";

import Box from '@mui/material/Box';
import { 
    createTheme, 
    StyledEngineProvider, 
    ThemeProvider 
} from "@mui/material/styles";

import MUIDataTable from "mui-datatables";

import { TodoProps } from "../types/props"; 

interface Todo {
    todos: TodoProps[] | undefined
}

const columns = [
    {
        name: "title",
        label: "Title",
        options: {
            filter: true,
            sort: true
        }
    },
    {
        name: "description",
        label: "Description",
        options: {
            filter: true,
            sort: true
        }
    },
    {
        name: "status",
        label: "Status",
        options: {
            filter: false,
            sort: false
        }
    },
    {
        name: "actions",
        label: "Actions",
        options: {
            filter: false,
            sort: false
        }
    },
];

const DataTable:React.FC<Todo> = ({ todos }) => {
    return (
        <StyledEngineProvider>
            <ThemeProvider theme={createTheme()}>
                <Box style={{ 
                    width: "93%", 
                    minHeight: "350px", 
                    margin: "auto"
                }}>
                    <MUIDataTable
                        title="TO-DO LIST"
                        columns={columns}
                        options={{
                            responsive: "standard"                
                        }}
                    />
                </Box>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default DataTable;
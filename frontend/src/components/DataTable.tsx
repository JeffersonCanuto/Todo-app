import React, { useState, useEffect, useCallback } from "react";

import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";

import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { PiPlusBold } from "react-icons/pi";
import { BsTrash } from "react-icons/bs";

import MUIDataTable, { MUIDataTableMeta } from "mui-datatables";

import { TodoProps } from "../@types/props";
import { updateStatus } from "../services/requests";
import { customData, customColumns, tableStyles, tableThemes } from "../constants/datatable";

interface TodoItems {
    todos: TodoProps[] | [];
    todosLength: number
}

const DataTable:React.FC<TodoItems> = ({ todos, todosLength }) => {
    const [ rowStates, setRowStates ] = useState<{[key: number]: { completed: boolean; pending: boolean }}>({});
    const [ rowIndex, setRowIndex ] = useState<number>(0);
    const [ isStatusClicked, setIsStatusClicked ] = useState<boolean>(false);

    useEffect(() => {
        let rows:{[key:number]:{completed: boolean; pending:boolean}} = {};

        todos.forEach(todo => {
            rows[todo.id - 1] = {
                completed: todo.completed,
                pending: todo.pending
            };
        });

        setRowStates(rows);
        setIsStatusClicked(false);
    }, [todos]);

    useEffect(() => {
        const 
            targetIndex:number = rowIndex + 1,
            targetData:Partial<TodoProps> = rowStates[`${rowIndex}`];

        if(Object.keys(rowStates).length && isStatusClicked) {
            (async function updateStatusDB() {
                await updateStatus(targetIndex, targetData);
            })();
        }
    }, [rowStates]);

    const handleCompletedButton = useCallback((event:React.MouseEvent<HTMLButtonElement>, rowIndex:number) => {
        event.preventDefault();

        setRowStates(state => ({
            ...state,
            [rowIndex]: {
                completed: !state[rowIndex]?.completed,
                pending: false
            }
        }));
        setRowIndex(rowIndex);
        setIsStatusClicked(true);
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
        setRowIndex(rowIndex);
        setIsStatusClicked(true);
    },[rowStates]);

    return (
        <StyledEngineProvider>
            <ThemeProvider theme={tableThemes(todosLength)}>
                <Box style={{
                    maxWidth: "93%",
                    width: "100%", 
                    maxHeight: "50%",
                    height: "100%",
                    margin: "auto"
                }}>
                    <MUIDataTable
                        title="TO-DO LIST"
                        data={customData(todos)}
                        columns={customColumns.map((column:any) => {
                            if (column.name.includes("status")) {
                                return {
                                    ...column, 
                                    options: {
                                        ...column.options,
                                        customBodyRender: (value:boolean, tableMeta:MUIDataTableMeta) => {
                                            const rowIndex = tableMeta.rowIndex;
                                            const rowState = rowStates[rowIndex] || { completed: false, pending: false };

                                            return value === true && (
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
                                                            <FaCheck style={{ color: rowState.completed ? tableStyles.completedBtn.clickedColor : tableStyles.completedBtn.unclickedColor }}/>
                                                        </button>
                                                    </Tooltip>
                                                    <Tooltip title="Pending">
                                                        <button
                                                            aria-label="check-todo-pending"
                                                            onClick={event => handlePendingButton(event, rowIndex)}
                                                        >
                                                            <FaXmark style={{ color: rowState.pending ? tableStyles.pendingBtn.clickedColor  : tableStyles.pendingBtn.unclickedColor }}/>
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

                            return {
                                ...column,
                                options: {
                                    ...column.options,
                                    customBodyRender: (value:string | number) => {   
                                        return (
                                            <p 
                                                style={{ 
                                                    display: "flex",
                                                    justifyContent: "center"
                                                }}
                                            >
                                                {value}
                                            </p>
                                        )
                                    }
                                }
                            }
                        })}
                        options={{
                            responsive: "standard",
                            rowsPerPage: 3,
                            rowsPerPageOptions: [5],
                            selectableRows: "none",
                            filter: false
                        }}
                    />
                </Box>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default DataTable;
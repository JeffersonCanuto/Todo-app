import React, { forwardRef } from "react";

import { InputLabel } from '@mui/material';

import Buttons from "./Buttons";
import Inputs from "./Inputs";

import { InputProps } from "../@types/props";
import { RefItems } from "./Inputs";

interface TodoItems extends InputProps {
    todosLength: number;
    handleTodoAdd: () => void;
    handleTodoList: () => void
}

const Todo = forwardRef<RefItems, TodoItems>(({ todosLength, handleTodoAdd, handleTodoList, ...props }, ref) => {
    return (
        <main className="w-full flex sm:justify-center sm:items-center relative top-[60px] xl:top-24 gap-5">
            <div className="grid grid-cols-1 sm:gap-5 xl:gap-0 xl:flex">
                <InputLabel 
                    className="mr-4 mt-3" 
                    htmlFor="todo"
                    sx={{
                        color: "#5fa6ec",
                        fontWeight: "bold"
                    }}
                >
                    TO-DO:
                </InputLabel>
                <Inputs {...props} ref={ref} />
            </div>
            <div className="w-[10vw] grid grid-cols-1 sm:mt-5 xl:mt-2 xl:ml-4 xl:flex xl:justify-between">
                <Buttons 
                    todosLength={todosLength} 
                    handleTodoAdd={handleTodoAdd} 
                    handleTodoList={handleTodoList}
                />
            </div>
        </main> 
    );
})

export default Todo;
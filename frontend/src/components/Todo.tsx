import React from "react";

import { InputLabel } from '@mui/material';

import Buttons from "./Buttons";
import Inputs from "./Inputs";

import { InputProps, TodoProps } from "../@types/props";

type Todos = InputProps & {
    todos: TodoProps[] | [];
    setTodos: React.Dispatch<React.SetStateAction<TodoProps[] | []>>;
};

const Todo:React.FC<Todos> = ({todos, setTodos, ...props}) => {
    return (
        <main className="w-full flex relative left-8 top-20 gap-5">
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
                <Inputs {...props} />
            </div>
            <div className="w-[10vw] grid grid-cols-1 sm:mt-5 xl:mt-2 xl:ml-4 xl:flex xl:justify-between">
                <Buttons todos={todos} setTodos={setTodos} />
            </div>
        </main> 
    );
}

export default Todo;
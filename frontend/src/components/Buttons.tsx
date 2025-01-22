import React, { useState, useCallback }from "react";

import { FaPlus } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

import { Button } from '@mui/material';

import { TodoProps } from "../@types/props";

import { readData } from "../services/apiRequests";

type ButtonProps = { 
    todos: TodoProps[] | [];
    setTodos: React.Dispatch<React.SetStateAction<TodoProps[] | []>>;
};

const Buttons:React.FC<ButtonProps> = ({ todos, setTodos }) => {
    const [ dataLength, setDataLength ] = useState<number>(todos.length);

    const handleTodoAdd = () => {
        console.log("Add todos!");
    }
    
    const handleTodoList = useCallback(async() => {
        const data = await readData();

        setTodos(data);
        setDataLength(data.length);
    }, []);

    return (
        <>
            {[...Array(2)].map((_, index) => (
                <Button
                    key={index}
                    variant="outlined"
                    sx={{
                        width: "90px",
                        height: "40px",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "center"
                    }}
                    onClick={index === 0 ? handleTodoAdd : handleTodoList}
                >
                    {index === 0 ? (
                        <>
                            <span className="text-[10px]">Add</span>
                            <FaPlus className="mb-1 ml-1 text-[12px]"/>
                        </>
                    ): 
                        
                        <>
                            {
                                dataLength === 0 ?
                                    <>
                                        <span className="text-[10px]">List</span>
                                        <MdFilterList className="ml-1 text-[14px]"/>
                                    </>
                                :
                                    <>
                                        <span className="text-[10px]">Update</span>
                                        <RxUpdate className="ml-1 text-[12px]"/>
                                    </>
                            }
                            
                        </>
                    }
                </Button>
            ))}
        </>
    );
}

export default Buttons;

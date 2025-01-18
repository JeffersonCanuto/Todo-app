import React, { useState }from "react";

import { FaPlus } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";

import { Button } from '@mui/material';

import { TodoProps } from "../types/props";

import { readData } from "../services/apiRequests";

type ButtonProps = { 
    setTodos: React.Dispatch<React.SetStateAction<TodoProps[] | undefined>>
};

const Buttons:React.FC<ButtonProps> = ({ setTodos }) => {
    const handleAddTodos = () => {
        console.log("Add todos!");
    }
    
    const handleListTodos = async () => {
        setTodos(await readData());
    }

    return (
        <>
            {[...Array(2)].map((_, index) => (
                <Button
                    key={index}
                    variant="outlined"
                    sx={{
                        width: "82px",
                        height: "40px",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                    onClick={index === 0 ? handleAddTodos : handleListTodos}
                >
                    {index === 0 ? (
                        <>
                            Add
                            <FaPlus className="mb-1 text-[12px]"/>
                        </>
                    ): 
                        
                        <>
                            List
                            <MdFilterList className="mb-1 text-[16px]"/>
                        </>
                    }
                </Button>
            ))}
        </>
    );
}

export default Buttons;

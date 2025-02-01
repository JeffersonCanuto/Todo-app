import React from "react";

import { FaPlus } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

import { Button } from '@mui/material';

interface ButtonProps { 
    todosLength: number;
    handleTodoAdd: () => void;
    handleTodoList: () => void;
};

const Buttons:React.FC<ButtonProps> = ({ todosLength, handleTodoAdd, handleTodoList }) => {
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
                                todosLength === 0 ?
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

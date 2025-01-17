import React from "react";

import { CiCircleList } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";

import clsx from "clsx";

import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';

import { Button } from '@mui/material';

type InputProps = {
    titleType: string;
    titleHolder: string;
    titleName: string;
    titleId: string;
    descType: string;
    descHolder: string;
    descName: string;
    descId: string;
};

const TodoInsert:React.FC<InputProps> = (
    {
        titleType,
        titleHolder,
        titleName,
        titleId,
        descType,
        descHolder,
        descName,
        descId
    }
) => {
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
                <Input
                    type={titleType}
                    placeholder={titleHolder}
                    name={titleName}
                    id={titleId}
                    className={clsx(
                        "sm:w-24 md:w-40",
                        "mr-2"
                    )}
                    sx={{
                        input: { 
                            color: "#76bdd5",
                            fontWeight: "bold"
                        }
                    }}
                />
                <Input
                    type={descType}
                    placeholder={descHolder}
                    name={descName}
                    id={descId}
                    sx={{
                        width: "20vw",
                        input: { 
                            color: "#76bdd5",
                            fontWeight: "bold"
                        }
                    }}
                />
                <div className="hidden xl:block">
                    <CiCircleList className="mt-5 ml-4 text-2xl text-blue-400" />
                </div>
            </div>
            <div className="w-[9vw] grid grid-cols-1 sm:mt-5 xl:mt-2 xl:ml-4 xl:flex xl:justify-between">
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
            </div>
        </main>
    );
}

export default TodoInsert;
import React from "react";

import { CiBoxList } from "react-icons/ci";

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
    descId: string
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
                <InputLabel className="mr-4 mt-3" htmlFor="todo">TO-DO:</InputLabel>
                <Input
                    type={titleType}
                    placeholder={titleHolder}
                    name={titleName}
                    id={titleId}
                    className={clsx(
                        "sm:w-24 md:w-40",
                        "mr-2"
                    )}
                />
                <Input
                    type={descType}
                    placeholder={descHolder}
                    name={descName}
                    id={descId}
                    sx={{
                        width: "20vw"
                    }}
                />
                <div className="hidden xl:block">
                    <CiBoxList className="mt-5 ml-4 text-2xl" />
                </div>
            </div>
            <div className="w-[8vw] grid grid-cols-1 sm:mt-5 xl:mt-2 xl:ml-4 xl:flex xl:justify-between">
                <Button 
                    variant="outlined"
                    sx={{
                        width: "60px",
                        height: "40px"
                    }}
                >
                    Add
                </Button>
                <Button 
                    variant="outlined"
                    sx={{
                        width: "60px",
                        height: "40px"
                    }}
                >
                    List
                </Button>
            </div>
        </main>
    );
}

export default TodoInsert;
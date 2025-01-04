import React from "react";

import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';

const ControlledInput:React.FC = () => {
    return (
        <div className="flex justify-center items-center relative top-20">
            <InputLabel className="mr-4 mt-1" htmlFor="todo">To-do:</InputLabel>
            <Input
                type="text"
                placeholder="Add/Update todo..."
                name="todo"
                id="todo"
                sx={{
                    width: "30vw"
                }}
            />
        </div>
    );
}

export default ControlledInput;
import React from "react";

import { FaPlus } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";

import { Button } from '@mui/material';

const Buttons:React.FC = () => {
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

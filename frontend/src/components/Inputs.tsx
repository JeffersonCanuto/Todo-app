import React from "react";

import clsx from "clsx";

import { Input } from '@mui/material';

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

const Inputs:React.FC<InputProps> = ({
    titleType,
    titleHolder,
    titleName,
    titleId,
    descType,
    descHolder,
    descName,
    descId
}) => {
    return (
        <>
            {[...Array(2)].map((_, index) => (
                <Input
                    type={index === 0 ? titleType : descType}
                    placeholder={index === 0 ? titleHolder : descHolder}
                    name={index === 0 ? titleName : descName}
                    id={index === 0 ? titleId : descId}
                    className={
                        index === 0 ? clsx(
                            "sm:w-24 md:w-40",
                            "mr-2"
                        ) : undefined
                    }
                    sx={
                        index === 0 ? {
                            input: { 
                                color: "#76bdd5",
                                fontWeight: "bold"
                            }
                        } : {
                            width: "20vw",
                            input: { 
                                color: "#76bdd5",
                                fontWeight: "bold"
                            }
                        }
                    }
                />
            ))}
        </>
    );
}

export default Inputs;
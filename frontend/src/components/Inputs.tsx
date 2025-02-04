import React, { useRef, useImperativeHandle, forwardRef } from "react";

import clsx from "clsx";

import { Input } from '@mui/material';

import { InputProps } from "../@types/props";

export interface RefItems {
    titleRef: React.RefObject<HTMLInputElement>;
    descRef: React.RefObject<HTMLInputElement>
}

const Inputs = forwardRef<RefItems, InputProps>(({
    titleType,
    titleHolder,
    titleName,
    titleId,
    descType,
    descHolder,
    descName,
    descId
}, ref) => {
    const 
        titleRef = useRef<HTMLInputElement>(null),
        descRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
        return {
            titleRef,
            descRef
        }
    });
    
    return (
        <>
            {[...Array(2)].map((_, index) => (
                <Input
                    key={index}
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
                    inputRef={index === 0 ? titleRef : descRef}
                />
            ))}
        </>
    );
})

export default Inputs;
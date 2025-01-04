import React from "react";

const Input:React.FC = () => {
    return (
        <>
            <label className="mr-4" htmlFor="todo">Todo</label>
            <input
                type="text"
                placeholder="Add/Update todo..."
                name="todo"
                id="todo"
            />
        </>
        
    );
}

export default Input;
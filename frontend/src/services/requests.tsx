import { TodoProps } from "../@types/props";
import { DataItems } from "../App";

/* CREATE method: add to-do */
const createTodo = async(data:DataItems):Promise<TodoProps[] | []> => {
    try {
        const 
            host:string = import.meta.env.VITE_API_HOST,
            port:string = import.meta.env.VITE_API_PORT;

        const response = await fetch(`http://${host}:${port}/api/todo-create/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Error while adding to-do to the DB...");
        }

        return await response.json();
    } catch(error:any) {
        console.error(`${error.message}`);

        return [];
    }
}

/* READ method: list all to-dos */
const readTodos = async():Promise<TodoProps[] | []> => {
    try {
        const
            host:string = import.meta.env.VITE_API_HOST,
            port:string = import.meta.env.VITE_API_PORT;

        const response = await fetch(`http://${host}:${port}/api/todo-read/all/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error while fetching all to-dos from the server...');
        }
        
        return await response.json();
    } catch(error:any) {
        console.error(`${error.message}`);

        return [];
    }
}

/* UPDATE method: update status (completed/pending) */
const updateStatus = async(id:number, data:Partial<TodoProps>):Promise<TodoProps[] | []> => {
    try {
        const
            host:string = import.meta.env.VITE_API_HOST,
            port:string = import.meta.env.VITE_API_PORT;

        const response = await fetch(`http://${host}:${port}/api/todo-update/${id}/`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Error while updating status info on the DB...")
        }
    
        return await response.json();
    } catch(error:any) {
        console.error(`${error.message}`);

        return [];
    }
}

export {
    createTodo,
    readTodos,
    updateStatus
};
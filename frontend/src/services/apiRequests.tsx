import { TodoProps } from "../@types/props";

/* READ method: list all to-dos */
const readAllTodos = async():Promise<TodoProps[] | []> => {
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
            throw new Error('Error while fetching data from API...');
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
            throw new Error("Failed to update status on DB...")
        }
    
        return await response.json();
    } catch(error:any) {
        console.error(`${error.message}`);

        return [];
    }
}

export {
    readAllTodos,
    updateStatus
};
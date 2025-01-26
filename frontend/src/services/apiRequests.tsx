/* READ method: list all data */
import { TodoProps } from "../@types/props";

const readData = async():Promise<TodoProps[] | []> => {
    try {
        const
            host:string = import.meta.env.VITE_API_HOST,
            port:string = import.meta.env.VITE_API_PORT;

        const response = await fetch(`http://${host}:${port}/api/todo-read/all/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error while fetching data from API...");
        }
        
        return await response.json();
    } catch(error:any) {
        console.error(`${error.message}`);

        return [];
    }
}

export {
    readData
};
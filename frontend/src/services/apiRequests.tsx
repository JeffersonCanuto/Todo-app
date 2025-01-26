/* READ method: list all data */
interface TodoItems {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    status: boolean;
    actions: boolean
}

const readData = async():Promise<TodoItems[] | []> => {
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
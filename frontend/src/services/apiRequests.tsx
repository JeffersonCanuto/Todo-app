/* READ method: list all data */
type Todo = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

const readData = async():Promise<Todo[] | []> => {
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
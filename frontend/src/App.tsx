import React, { useState, useCallback, useRef } from 'react';
import { LuNotebookPen } from "react-icons/lu";

import { TodoProps } from "./@types/props";
import { createTodo, readTodos } from "./services/requests";
import DataTable from './components/DataTable';
import Todo from "./components/Todo";

import { RefItems } from "./components/Inputs";

enum TitleItems {
	titleType = "title",
	titleHolder = "Add a title...",
	titleName = "title",
	titleId = "title"
};

enum DescriptionItems {
	descType = "description",
	descHolder = "Add a description...",
	descName = "description",
	descId = "description"
};

export interface DataItems {
	title: string | undefined;
	description: string | undefined
};

const App:React.FC = () => {
	const [ todos, setTodos ] = useState<TodoProps[] | []>([]);
	const inputRef = useRef<RefItems>(null);

	const handleTodoAdd = useCallback(async() => {
		if (inputRef.current) {
			const data:DataItems = {
				title: inputRef?.current.titleRef.current?.value,
				description: inputRef?.current.descRef.current?.value
			};

			await createTodo(data);
			setTodos(await readTodos());
		}
    }, []);

	const handleTodoList = useCallback(async() => {
        setTodos(await readTodos());
    }, []);

  	return (
    	<div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-300">
			<form className="w-[48vw] h-[95vh] mx-auto flex flex-col bg-white rounded-3xl">
				<h1 className="flex justify-center items-center relative top-7 text-[#76bdd5] text-3xl font-bold font-exo">
					TO-DO NOTES
					<LuNotebookPen className="ml-4" />
				</h1>
				<hr className="relative top-12" />
				<Todo
					{...TitleItems}
					{...DescriptionItems}
					todosLength={todos.length}
					handleTodoAdd={handleTodoAdd}
					handleTodoList={handleTodoList}
					ref={inputRef}
				/>
				<br />
				<DataTable todos={todos} todosLength={todos.length} />
			</form>
		</div>
  	)
}

export default App;

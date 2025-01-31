import React, { useState } from 'react';
import { LuNotebookPen } from "react-icons/lu";

import { TodoProps } from "./@types/props";

import DataTable from './components/DataTable';
import Todo from "./components/Todo";

interface TitleProps {
	titleType: string;
	titleHolder: string;
	titleName: string;
	titleId: string;
};

const titleProps : TitleProps = {
	titleType: "title",
	titleHolder: "Add a title...",
	titleName: "title",
	titleId: "title"
} as const;

interface DescriptionProps {
	descType: string;
	descHolder: string;
	descName: string;
	descId: string;
};

const descriptionProps: DescriptionProps = {
	descType: "description",
	descHolder: "Add a description...",
	descName: "description",
	descId: "description"
} as const;

const App:React.FC = () => {
	const [ todos, setTodos ] = useState<TodoProps[] | []>([]);
	
  	return (
    	<div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-300">
			<form className="w-[48vw] h-[95vh] mx-auto flex flex-col bg-white rounded-3xl">
				<h1 className="flex justify-center items-center relative top-7 text-[#76bdd5] text-3xl font-bold font-exo">
					TO-DO NOTES
					<LuNotebookPen className="ml-4" />
				</h1>
				<hr className="relative top-12" />
				<Todo
					{...titleProps}
					{...descriptionProps}
					todos={todos}
					todosLength={todos.length}
					setTodos={setTodos}
				/>
				<br />
				<DataTable todos={todos} todosLength={todos.length} />
			</form>
		</div>
  	)
}

export default App;

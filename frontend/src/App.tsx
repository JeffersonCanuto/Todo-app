import React from 'react';

import TodoInsert from "./components/TodoInsert";

const TitleProps : { titleType: string, titleHolder: string, titleName: string, titleId: string } = {
	titleType: "title",
	titleHolder: "Add a title...",
	titleName: "title",
	titleId: "title"
};

const DescriptionProps: { descType: string, descHolder: string, descName: string, descId: string } = {
	descType: "description",
	descHolder: "Add a description...",
	descName: "description",
	descId: "description"
};

const App:React.FC = () => {
  	return (
    	<div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-300">
			<form className="w-[48vw] h-[90vh] mx-auto flex flex-col bg-white rounded-3xl">
				<h1 className="flex justify-center items-center relative top-7 text-[#76bdd5] text-3xl font-bold font-exo">TO-DO NOTES</h1>
				<hr className="relative top-12" />
				<TodoInsert
					{...TitleProps}
					{...DescriptionProps}
				/>
			</form>
		</div>
  	)
}

export default App;

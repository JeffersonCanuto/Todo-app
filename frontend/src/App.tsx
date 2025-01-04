import React from 'react';

import ControlledInput from "./components/ControlledInput";

const App:React.FC = () => {
  	return (
    	<div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-300">
			<form className="w-[50vw] h-[90vh] mx-auto flex flex-col bg-white rounded-3xl">
				<h1 className="flex justify-center items-center relative top-7 text-[#76bdd5] text-3xl font-bold">TO-DO REMINDER</h1>
				<hr className="relative top-12" />
				<ControlledInput />
			</form>
		</div>
  	)
}

export default App;

import React from 'react';

import Input from "./components/Input";

const App:React.FC = () => {
  	return (
    	<div className="h-screen flex items-center justify-center">
			<form className="w-[80vw] h-[80vh] mx-auto flex justify-center items-center">
				<Input />
			</form>
		</div>
  	)
}

export default App;

import React, { useState } from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles"
import hogs from "../porkers_data";

function App() {
	const [category, setCategory] = useState("all")
	
	function onChange(e) {
		e.preventDefault()
		setCategory(e.target.value)
	}
	console.log(category)
	return (
		<div className="App">
			<Nav onChange={onChange}/>
			{hogs.map((hog) => {if (hog.greased === category || category === "all")return <HogTiles key={hog.name} hog={hog}/>})}
		</div>
	);
}

export default App;

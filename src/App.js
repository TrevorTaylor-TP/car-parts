import React from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">Zoomie Stuff</header>
			<ZoomiePartzList>
				<ZoomiePartz>Blinky lights</ZoomiePartz>
				<ZoomiePartz>Bumpy Bumper</ZoomiePartz>
			</ZoomiePartzList>
		</div>
	);
}

export default App;

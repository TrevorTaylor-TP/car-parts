import React from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">Zoomie Stuff</header>
			<ZoomiePartzList>
				<b>Zoomie Partz</b>
				<ZoomiePartz>Blinky lights</ZoomiePartz>
				<ZoomiePartz>Bumpy Bumper</ZoomiePartz>
				<ZoomiePartz>Water Swishers</ZoomiePartz>
			</ZoomiePartzList>
		</div>
	);
}

function ZoomiePartzList(props) {
	return <ul>{props.children}</ul>;
}

function ZoomiePartz(props) {
	return <li>{props.children}</li>;
}

export default App;

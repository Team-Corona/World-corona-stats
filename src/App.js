import React from "react";
import "./style/App.css";
import axios from "axios";
import SimpleMap from "./components/SimpleMap";
// import coronaData from "../server/index";

const coronaData = axios({
	method: "GET",
	url:
		"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
	headers: {
		"content-type": "application/octet-stream",
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "130e574162msh6cc16dbd234fc6ep18d4e3jsn9a2bc8ca2759"
	}
})
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	});

console.log(coronaData);

function App() {
	return (
		<div className="App">
			<SimpleMap />
			<h1>Let's make world corona stats</h1>
		</div>
	);
}

export default App;

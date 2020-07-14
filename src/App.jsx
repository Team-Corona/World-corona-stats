import React, { useState, useEffect } from "react";
import "./style/App.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import SimpleMap from "./components/SimpleMap";
import Information from "./components/Information";
import News from "./components/News";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, Row, Col, Navbar } from "react-bootstrap";
require("dotenv").config();
axios.defaults.withCredentials = true;
export default function App() {
	// const [coronaData, setCoronaData] = useState([]);
	// const [countriesData, setCountriesData] = useState([]);
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const corona = await axios(
	// 			"https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/cases_by_country.php",
	// 			{
	// 				method: "GET",
	// 				headers: {
	// 					"x-rapidapi-host": "coronavirus-monitor-v2.p.rapidapi.com",
	// 					"x-rapidapi-key":
	// 						"287a779037mshc14498a1ac0ebc0p1b8a7fjsn8e058dbd8350",
	// 				},
	// 			}
	// )
	// 	.then((response) => {
	// 		console.log("response", response);
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});
	// console.log(corona);
	// setCoronaData(corona.data);
	// const countries = await axios({
	// 	method: "GET",
	// 	url: "https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all",
	// 	headers: {
	// 			"content-type": "application/octet-stream",
	// 			"x-rapidapi-host": "ajayakv-rest-countries-v1.p.rapidapi.com",
	// 			"x-rapidapi-key": process.env.POP_DATA_APIKEY,
	// 		},
	// 	})
	// 		.then((response) => {
	// 			console.log("response", response);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// 	setCountriesData(countries);
	// 	console.log(countriesData);
	// };
	// fetchData();
	// }, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>World Corona Stats</h1>
			</header>

			<Container>
				<Row>
					<Col sm={8}>
						<SimpleMap />
					</Col>
					<Col sm={4}>
						<Navbar bg="dark" variant="dark" className="Navbar">
							<Navbar.Brand>Information Of Corona</Navbar.Brand>
						</Navbar>
						{/* <div className="scrollbar">
							{allInformation.map((inf) => {
								console.log(inf);
								return (
									<Information
										key={inf.country_name}
										country_name={inf.country_name}
										rate={inf.rate}
										cases={inf.cases}
										population={inf.population}
									/>
								);
							})}
						</div> */}
					</Col>
				</Row>
			</Container>
			<News />
		</div>
	);
}

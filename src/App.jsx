import React, { useState, useEffect } from "react";
import "./style/App.css";
import SimpleMap from "./components/SimpleMap";
import Information from "./components/Information";
import News from "./components/News";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, Row, Col, Navbar } from "react-bootstrap";
require("dotenv").config();
axios.defaults.withCredentials = true;
export default function App() {
	const [coronaData, setCoronaData] = useState([]);
	// const [countriesData, setCountriesData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const data1 = await axios({
				method: "GET",
				url:
					"https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/cases_by_country.php",
				headers: {
					"content-type": "application/octet-stream",
					"x-rapidapi-host": "coronavirus-monitor-v2.p.rapidapi.com",
					"x-rapidapi-key":
						"287a779037mshc14498a1ac0ebc0p1b8a7fjsn8e058dbd8350",
					useQueryString: true,
				},
				params: {},
			});
			setCoronaData(data1.data.countries_stat.slice(0, 4));
		};
		fetchData();
	}, []);

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
						<div className="scrollbar">
							{coronaData.map((stat, idx) => {
								console.log(stat);
								return (
									<Information
										key={idx}
										country_name={stat.country_name}
										rate={stat.rate}
										cases={stat.cases}
										deaths={stat.deaths}
									/>
								);
							})}
						</div>
					</Col>
				</Row>
			</Container>
			<News />
		</div>
	);
}

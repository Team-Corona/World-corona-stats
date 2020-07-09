const express = require("express");

const port = process.env.PORT || 8080;
const app = express();
require("dotenv").config();
app.listen(port, () => console.log(`Listening on Port ${port}`));

// api here
const axios = require("axios");
const coronaData = axios({
	method: "GET",
	url:
		"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
	headers: {
		"content-type": "application/octet-stream",
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": process.env.CORONA_DATA_APIKEY,
	},
})
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	});
console.log(coronaData);
const countryInfo = axios({
	method: "GET",
	url: "https://countries-cities.p.rapidapi.com/location/country/GB",
	headers: {
		"content-type": "application/octet-stream",
		"x-rapidapi-host": "countries-cities.p.rapidapi.com",
		"x-rapidapi-key": COUNTRY_INFO_APIKEY,
	},
	params: {
		format: "json",
		code: "US",
	},
})
	.then((response) => {
		console.log(response.data.population);
	})
	.catch((error) => {
		console.log(error);
	});

module.exports = { app };

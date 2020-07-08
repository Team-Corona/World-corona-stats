import React, { Component } from "react";
import geoData from "../data/geo.json"
import GoogleMapReact, {
	Marker,
	Map,
	GoogleApiWrapper,
} from "google-map-react";
import { useEffect } from "react";
import Mark from "../Marker.jsx";
// import marker from "./img/marker.png";
require("dotenv").config();

let countriesNames = [];
let allCountries = [];


// geoData imported from JSOn file in data. Now have reference to centroid coordinates for each country as needed
for (const items of geoData.features) {
	console.log(items.properties.name)
	console.log(items.properties.Longitude)
	console.log(items.properties.Latitude)
}

// We need to convert the counties to lat and lon with the geocode api

// We need to generate an array of these values
// We need to add a marker for each lat long pair

const AnyReactComponent = ({ text }) => <div>{Mark}</div>;

export default function SimpleMap() {
	let defaultProps = {
		center: {
			lat: 28.95,
			lng: 46.33,
		},
		zoom: 0,
		minZoom: 1,
	};

	let allLocations = [
		{ lat: 35.86166, lng: 104.195397 },
		{ lat: 36.204824, lng: 138.252924 },
		{ lat: 22.3193039, lng: 114.1693611 },
		{ lat: 15.870032, lng: 100.992541 },
		{ lat: 35.907757, lng: 127.766922 },
		{ lat: 4.210484, lng: 101.975766 },
		{ lat: 23.69781, lng: 120.960515 },
		{ lat: 14.058324, lng: 108.277199 },
		{ lat: 1.352083, lng: 103.819836 },
		{ lat: 51.165691, lng: 10.451526 },
		{ lat: -25.274398, lng: 133.775136 },
		{ lat: 46.227638, lng: 2.213749 },
		{ lat: 37.09024, lng: -95.712891 },
		{ lat: 22.198745, lng: 113.543873 },
		{ lat: 55.378051, lng: -3.435973 },
		{ lat: 56.130366, lng: -106.346771 },
		{ lat: 12.879721, lng: 121.774017 },
		{ lat: 20.593684, lng: 78.96288 },
		{ lat: 23.424076, lng: 53.847818 },
		{ lat: 40.46366700000001, lng: -3.74922 },
		{ lat: 61.52401, lng: 105.318756 },
		{ lat: 41.87194, lng: 12.56738 },
		{ lat: 28.394857, lng: 84.12400799999999 },
		{ lat: 60.12816100000001, lng: 18.643501 },
		{ lat: 61.92410999999999, lng: 25.7481511 },
		{ lat: 7.873053999999999, lng: 80.77179699999999 },
		{ lat: 50.503887, lng: 4.469936 },
		{ lat: 12.565679, lng: 104.990963 },
	];

	// let marker = new window.google.maps.Marker({
	//   position: { lat: 59.955413, lng: 30.337844 }
	// });
	// console.log("marker :", marker);
	const mapStyles = {
		width: "100%",
		height: "100%",
	};

	return (
		// Important! Always set the container height explicitly
		<div style={{ height: "100vh", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				{/* <Marker position={{ lat: 59.955413, lng: 30.337844 }} /> */}

				{allLocations.map((item) => {
					return (
						<Mark
							lat={item.lat}
							lng={item.lng}
							className="marker1"
							style={{ zoom: 10 }}
						/>
					);
				})}

				<Mark lat={59.955413} lng={30.337844} />
				<AnyReactComponent
					lat={59.955413}
					lng={30.337844}
					text="My Marker"
					label="123"
				/>
			</GoogleMapReact>
		</div>
	);
}

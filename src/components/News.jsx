import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "../style/news.css";
require("dotenv").config();
axios.defaults.withCredentials = true;
export default function News(props) {
	const [coronaNews, setCoronaNews] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const res = await axios({
				method: "GET",
				url:
					"https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search",
				headers: {
					"content-type": "application/octet-stream",
					"x-rapidapi-host":
						"microsoft-azure-bing-news-search-v1.p.rapidapi.com",
					"x-rapidapi-key":
						"287a779037mshc14498a1ac0ebc0p1b8a7fjsn8e058dbd8350",
					useQueryString: true,
				},
				params: {
					count: 10,
					q: "Coronavirus",
					mkt: "en-AU",
				},
			});
			const data = res.data;
			console.log(data);
			setCoronaNews(data.value);
		};
		fetchData();
	}, []);
	return (
		<div className="corona-news">
			{coronaNews.map((news, idx) => {
				return (
					<Card
						style={{ border: "1px solid black" }}
						className="news-card"
						key={idx}
					>
						<Card.Body>
							<Card.Title>{news.name}</Card.Title>
							<Card.Text>{news.description}</Card.Text>
						</Card.Body>
						<Card.Link href={news.url}>Check the news</Card.Link>
					</Card>
				);
			})}
		</div>
	);
}

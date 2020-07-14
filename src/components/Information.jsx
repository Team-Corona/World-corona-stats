import React from "react";
import { Card } from "react-bootstrap";

export default function Information({ country_name, cases, deaths }) {
	return (
		<>
			<br />
			<Card border="dark" className="Card">
				<Card.Header className="infHeader">{country_name}</Card.Header>
				<Card.Body className="infContent">
					<Card.Text>Cases : {cases}</Card.Text>
					<Card.Text>Total death toll : {deaths}</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}

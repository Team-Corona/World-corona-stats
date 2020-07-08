import React from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";

export default function Information(props) {
  // const { countryName, rate, cases, population } = props;
  const { country_name, rate, cases, population, abbCou } = props;
  return (
    <>
      <br />
      <Card border="dark" className="Card{">
        <Card.Header className="infHeader">{props.country_name}</Card.Header>
        <Card.Body className="infContent">
          <Card.Text>Cases : {props.cases}</Card.Text>
          <Card.Text>Population : {props.population}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

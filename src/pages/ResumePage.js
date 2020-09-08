import React from "react";
import Hero from "../components/Hero";

import { Card } from "react-bootstrap";
function ResumePage(props) {
  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <Hero title={props.title} />
      <Card style={{ width: "18r", margin: 30, textAlign: "center", }}>
        <Card.Body>
          <Card.Title>Andon Specialties Mobile App</Card.Title>
          {/* set a why reason*/ }
          <Card.Text>Goal: Create a cross-platform app to ask questions through and request quotes from.</Card.Text>
          <Card.Text>Language: JavaScript / React-native</Card.Text>
          <Card.Text>Link: N/A, this is being posted to app store. Coming Soon.</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18r", margin: 30, textAlign: "center", borderColor:'green' }}>
        <Card.Body>
          <Card.Title>Project Sunburn</Card.Title>
          <Card.Text>Goal: Create a tool to identify ideal customers for solar companies</Card.Text>
          <Card.Text>Language: Python</Card.Text>
          <Card.Text><a href='https:devpost.com/software/project-sunburn' target='_blank' rel="noopener noreferrer"> View</a></Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18r", margin: 30, textAlign: "center", borderColor:'red' }}>
        <Card.Body>
          <Card.Title>Prayer Library</Card.Title>
          <Card.Text>Goal: Create a tool to help people maintain prayers, as well as act as search engine for the Bible.</Card.Text>
          <Card.Text>Language: C++</Card.Text>
          <Card.Text><a href ='https://github.com/samuelj1323/PLib' target='_blank' rel="noopener noreferrer"> View </a></Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18r", margin: 30, textAlign: "center", borderColor: 'red' }}>
        <Card.Body>
          <Card.Title>Work Queue</Card.Title>
          <Card.Text>Goal: Create a tool to help students to identify their priorities and create lists of things to do in order of importance.</Card.Text>
          <Card.Text>Language: C++</Card.Text>
          <Card.Text><a href='https://github.com/samuelj1323/QueueSchedule' target='_blank' rel="noopener noreferrer">View</a></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ResumePage;

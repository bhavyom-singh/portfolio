import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

export default function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am a Software Engineer with over three years of experience, specializing in the Microsoft Stack, including C#, .NET Core, .NET Framework, Entity Framework, T-SQL, and Microsoft Azure. I hold a Master's degree in Computer Science from California State University, Fullerton, which has further solidified my expertise and dedication to the field.
            <br />
            <br />
            Apart from this, I like playing ping-pong, going for a long walks or long drives!
          </p>
          
          <p style={{ color: "rgb(155 126 172)" }}>
          "You don't learn to walk by following rules. You learn by doing, and by falling over."{" "}
          </p>
          <footer className="blockquote-footer">Richard Branson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

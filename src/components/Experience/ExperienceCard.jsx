import Card from "react-bootstrap/Card";

export default function ExperienceCard(props) {
  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{height:"300px", width:"300px", alignItems:"center"}} /> */}
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title><h4>{props.designation}</h4></Card.Title>
        <br/>
        <Card.Subtitle>{props.companyName}</Card.Subtitle>
        <br/>
        <Card.Text>{props.duration}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
        
      </Card.Body>
    </Card>
  );
}

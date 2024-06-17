import Card from "react-bootstrap/Card";

export default function EducationCard(props) {
  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{height:"300px", width:"300px", alignItems:"center"}} /> */}
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title><h4>{props.title}</h4></Card.Title>
        <br/>
        <Card.Subtitle>{props.subtitle}</Card.Subtitle>
        <br/>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.gpaText} : {props.gpa}</Card.Text>
        
      </Card.Body>
    </Card>
  );
}

import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <Container fluid className="project-section" id="education">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <EducationCard
              title="California State University, Fullerton"
              subtitle="Master of Science, Computer Science"
              description="August 2022 - May 2024"
              gpaText="GPA"
              gpa="3.74"
            />
          </Col>

          <Col md={6} className="project-card">
            <EducationCard
              title="Maharana Pratap University of Agriculture and Technology, Udaipur"
              subtitle="Bachelor of Technology, Computer Science and Engineering"
              description="August 2013 - June 2017"
              gpaText="CGPA"
              gpa="3.3"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

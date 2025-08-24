import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCard";
import { sendGAEvent } from "../../analytics";

export default function Education() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sendGAEvent("section_view", { section: "Education" });
          }
        });
      },
      { threshold: 0.5 } // trigger when 50% of the section is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

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

import { Col, Row } from "react-bootstrap";
import { SiPostman, SiVercel } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BsMicrosoftTeams } from "react-icons/bs";
import { VscAzureDevops } from "react-icons/vsc";

export default function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoVisualStudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsMicrosoftTeams />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscAzureDevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

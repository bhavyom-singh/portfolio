import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <Container fluid className="project-section" id="experience">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>As A Software Engineer</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              designation="Software Engineer"
              companyName="Emtec Inc"
              duration="February 2022 - August 2022"
              description="At Emtec Inc., I successfully developed a user-friendly insurance quote application that integrated data from multiple underwriters, greatly enhancing the quoting process for users. I authored over 50 REST APIs and function app projects using .NET Core, MSSQL, and Microsoft Azure, creating robust and scalable backend solutions."
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              designation="Software Engineer"
              companyName="Clover IT Services Private Limited"
              duration="February 2019 - April 2020"
              description="I significantly enhanced the efficiency of an MLM product by 20% through the use of .NET Core, ADO.Net, and T-SQL, alongside front-end improvements with AngularJS. My global support counseling resolved 40 weekly technical issues, ensuring high client satisfaction. I increased productivity by 10% by developing an in-house productivity tool using Entity Framework and Angular 8."
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              designation="Software Engineer"
              companyName="Kansoft Solutions Private Limited"
              duration="June 2017 - February 2019"
              description="I integrated Teleshopping CRM and ERP software with 8 new modules, enhancing functionality and user experience. Utilizing the .NET Framework, I upgraded 7 modules for marketplace and dealer products, significantly boosting system efficiency. I developed over 75 REST APIs and implemented ERP-Courier Integration using C# and web services (REST and SOAP). By collaborating with 10 clients, I delivered actionable features that met their specific business needs."
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              designation="Intern"
              companyName="HCL"
              duration="June 2015"
              description="During my one-month internship here, I successfully developed a Java desktop application using Java Swing and MySQL. This project enhanced my skills in desktop application development and database integration, allowing me to deliver a functional and user-friendly software solution within a limited timeframe. This experience not only strengthened my technical abilities but also demonstrated my capacity to learn quickly and contribute effectively to a professional team."
            />
          </Col>
        </Row>
        <p style={{ color: "white" }}>Other Titles I held</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              designation="Teaching Associate"
              companyName="California State University Fullerton"
              duration="January 2024 - May 2024"
              description="I successfully planned and taught Web Front-End Engineering to a class of 44 students, covering HTML, CSS, JavaScript, and ReactJS in an interactive and engaging setting. This experience honed my teaching skills and deepened my understanding of front-end technologies, while also enabling me to effectively convey complex concepts to a diverse group of students."
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              designation="Research Assistant"
              companyName="California State University Fullerton"
              duration="August 2023 - May 2024"
              description="At the Social Science Research Center (A division in CSUF, that comes under Auxiliary Services Corporation), I provided comprehensive support to the Director and the Administrative Operations Manager. I was responsible for data collection and data entry into the database, ensuring accurate and timely information management. This role enhanced my organizational skills and attention to detail, contributing to the smooth operation of the center."
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              designation="Tutor"
              companyName="Self Employed"
              duration="May 2020 - February 2022"
              description="During the COVID-19 pandemic, I taught mathematics to high school students, adapting to remote teaching methods to ensure continuous learning. This experience enhanced my ability to convey complex concepts in an understandable manner and demonstrated my commitment to education during challenging times. It also improved my communication and virtual teaching skills, ensuring that students remained engaged and successful despite the circumstances."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import DatingApp from "../../Assets/Projects/DatingApp.png";
import HWDR from "../../Assets/Projects/HWDR.png";
import Streamify from "../../Assets/Projects/Streamify.png";
import SmartReceipts from "../../Assets/Projects/SmartReceipts.png";
import TextToImage from "../../Assets/Projects/TxtToImg.png";
import FileProtectorApp from "../../Assets/Projects/FileProtectorApp.png";
import { sendGAEvent } from "../../analytics";

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !sessionStorage.getItem("ProjectsSeen")) {
            sendGAEvent("section_view", { section: "Projects" });
            sessionStorage.setItem("ProjectsSeen", "true");
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
    <Container fluid className="project-section" id="project" ref={ref}>
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HWDR}
              isBlog={false}
              title="Hand Written Digit Recognition"
              description="I developed an application that accurately recognizes handwritten digits from the Scikit-learn dataset, achieving an impressive recognition rate of 95%. This project demonstrated my mastery of machine learning techniques and can be extended to incorporate the MNIST dataset, showcasing its versatility and potential for broader applications."
              ghLink="https://github.com/bhavyom-singh/HandWrittenDigitRecognition"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Streamify}
              isBlog={false}
              title="Streamify"
              description="I built a scalable text streaming project using Apache Kafka, Spark, and Cassandra on Linux, demonstrating my expertise in big data technologies. This project efficiently processes and stores large datasets with millions of records, enabling real-time insights and showcasing its ability to handle high-volume data streams effectively."
              ghLink="https://github.com/bhavyom-singh/AdvanceDatabaseProject"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DatingApp}
              isBlog={false}
              title="Dating App"
              description="I developed a comprehensive application leveraging Angular and .NET Core, designed for the dating context. The application includes features such as user registration, information management, photo integration, and messaging functionality. This project enhanced the user experience significantly and showcased my ability to create robust, full-stack solutions with modern web technologies."
              ghLink="https://github.com/bhavyom-singh/DatingApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SmartReceipts}
              isBlog={false}
              title="Smart Receipts"
              description="Engineered a robust receipt management solution, Smart Receipts, integrating Google Cloud Vision for real-time text extraction and Hugging Face NLP models for category classification, which automates spending analytics and generates comprehensive Excel reports for streamlined expense tracking and insights."
              ghLink="https://github.com/bhavyom-singh/SmartReceipts"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToImage}
              isBlog={false}
              title="Text-to-Image Desktop App"
              description="Designed an innovative text-to-image generation application utilizing Hugging Face models and Nvidia CUDA acceleration, paired with a modern CustomTKinter desktop UI. This project showcases expertise in merging AI and GPU technologies to transform text inputs into high-quality images with exceptional speed and precision."
              ghLink="https://github.com/bhavyom-singh/Text-to-ImageDesktopApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FileProtectorApp}
              isBlog={false}
              title="File Protector App"
              description="Developed FileProtectorApp, a secure .NET MAUI desktop utility built with MVVM, enabling AES-based file encryption and PDF password protection through a simple drag-and-drop interface. Architected for Windows today with scalability toward cross-platform expansion, combining strong design principles with user-focused functionality."
              ghLink="https://github.com/bhavyom-singh/FileProtectorApp"
              downloadLink="https://github.com/bhavyom-singh/FileProtectorApp/releases/download/v1.0.0/FileProtectorApp-v1.0.zip"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

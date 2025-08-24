import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import homeLogo from "../../Assets/home-main.svg";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Resume_BhavyomSinghKushwaha.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { sendGAEvent } from "../../analytics";

export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sendGAEvent("section_view", { section: "Home" });
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
    <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              I'm
              <strong className="main-name"> Bhavyom</strong>
            </h1>
            <h3 className="heading-name">
              But you can call me <strong className="main-name"> Bhavi </strong>
            </h3>
            <div className="heading-type">
              <Type />
            </div>

            <div id="button-resume-linkedin">
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{
                  maxWidth: "250px",
                }}
                onClick={() =>
                  sendGAEvent("home_resume_download", {
                    file: "/resume.pdf",
                  })
                }
              >
                <AiOutlineDownload />
                &nbsp;Download Resume
              </Button>
              <Button
                href="https://www.linkedin.com/in/bhavyom-singh/"
                style={{ color: "white", margin: "10px" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  sendGAEvent("home_linkedin_click", {
                    link_url: "https://www.linkedin.com/in/bhavyom-singh/",
                  })
                }
              >
                <FaLinkedinIn />
              </Button>
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

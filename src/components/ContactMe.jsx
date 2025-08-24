import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { MdLocationPin, MdOutlineContactMail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { sendGAEvent } from "../analytics";
export default function ContactMe() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !sessionStorage.getItem("ContactMeSeen")
          ) {
            sendGAEvent("section_view", { section: "ContactMe" });
            sessionStorage.setItem("ContactMeSeen", "true");
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
    <Container fluid className="home-about-section" id="contact" ref={ref}>
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to <span className="purple">connect </span>with me
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md="4" className="home-about-social">
            <h3 style={{ paddingTop: "10px" }}>
              <MdLocationPin /> Los Angeles, CA
            </h3>
          </Col>
          <Col md="4" className="home-about-social">
            <h3 style={{ paddingTop: "10px" }}>
              <MdOutlineContactMail />{" "}
              <a
                href="mailto:bhavyom19@gmail.com"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() =>
                  sendGAEvent("contact_email_click", { method: "mailto" })
                }
              >
                bhavyom19@gmail.com
              </a>
            </h3>
          </Col>
          <Col md="4" className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bhavyom-singh"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                  onClick={() =>
                    sendGAEvent("contact_github_click", {
                      link_url: "https://github.com/bhavyom-singh",
                    })
                  }
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bhavyom-singh/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                  onClick={() =>
                    sendGAEvent("contact_linkedin_click", {
                      link_url: "https://www.linkedin.com/in/bhavyom-singh/",
                    })
                  }
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

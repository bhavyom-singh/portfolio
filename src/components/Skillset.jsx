import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import TechStack from "./TechStack";
import ToolStack from "./ToolStack";
import { sendGAEvent } from "../analytics";

export default function Skillset() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sendGAEvent("section_view", { section: "Skillset" });
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
    <Container fluid className="about-section" id="skill">
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <TechStack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <ToolStack />
      </Container>
    </Container>
  );
}

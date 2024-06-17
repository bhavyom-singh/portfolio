import { Container} from "react-bootstrap";
import TechStack from "./TechStack";
import ToolStack from "./ToolStack";


export default function Skillset(){
    return <Container fluid className="about-section" id="skill">
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
}
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { sendGAEvent } from "../../analytics";

export default function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Header>
        <Card.Title>{props.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {/* {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )} */}
      </Card.Body>
      <Card.Footer>
        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            onClick={() =>
              sendGAEvent(
                "project_github_" + props.title.split(" ").join("_") + "_click",
                {
                  link_url: props.ghLink,
                }
              )
            }
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {props.downloadLink && (
          <Button
            variant="primary"
            href={props.downloadLink}
            target="_blank"
            onClick={() =>
              sendGAEvent(
                "project_github_download_" +
                  props.title.split(" ").join("_") +
                  "_click",
                {
                  link_url: props.downloadLink,
                }
              )
            }
          >
            Download
          </Button>
        )}
        {"\n"}
        {"\n"}
      </Card.Footer>
    </Card>
  );
}

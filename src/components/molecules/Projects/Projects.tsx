import { IProject, projects } from "../../../utils";
import {
  Container,
  StyledDiv,
  HoverDiv,
  Subtitle,
  TextBlock,
  Title,
  StyledProduct,
  Text,
  StyledButton,
  BtnGroup,
} from "./Projects.styles";
import Fade from "react-reveal/Fade";

const products: IProject[] = projects.filter((_, idx) => idx < 4);

const Projects = ({ className = "" }) => {
  return (
    <Container>
      <TextBlock>
        <Title level="h2" color="primary" aligned="center">
          Our Executed Projects
        </Title>

        <Subtitle>
          We have provided strategies in initiating project, from conceptual and planning stage to
          the operational, management and project delivery stage in several countries.
        </Subtitle>
      </TextBlock>

      <StyledDiv className={className}>
        <Fade left>
          {products.map(project => (
            <StyledProduct product={project} key={project.id} data-title={project.title}>
              <HoverDiv>
                <Text>{project.title}</Text>
              </HoverDiv>
            </StyledProduct>
          ))}
        </Fade>
      </StyledDiv>

      <BtnGroup>
        <StyledButton type="link" link="projects" variant="secondary">
          See More
        </StyledButton>
      </BtnGroup>
    </Container>
  );
};

export default Projects;

import { Container } from "../layout/Container";
import SectionHeader from "../layout/SectionHeader";

function About() {
  return (
    <Container className="max-h-full">
      <SectionHeader headerText={`About CodeBreaker`} headingTag="h1" />
    </Container>
  );
}

export default About;

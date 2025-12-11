import { Container } from "../layout/Container";
import SectionHeader from "../layout/SectionHeader";

function About() {
  return (
    <Container className="max-h-full">
      <SectionHeader headerText={`About CodeBreaker`} headingTag="h1" />
      <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
        <p>
          <strong>Code</strong>Breaker is a sample project for a simple Code-Breaking Game. Basically an automated way
          to create little "code-breaking" worksheets where each letter in a secret message is represented as a symbol.
          Kids can then refer to an alphabet lookup table, and perform the translation.
        </p>
        <p>
          This project is built using React, TypeScript, TanStack Router, TanStack DB and Tailwind CSS. It serves as a
          demonstration of how to use these technologies together to create an interactive web application. Also a way
          for me to experiment with TanStack in a small project.
        </p>
        <p>
          Feel free to explore the codebase and modify it to suit your needs. Contributions and feedback are welcome!
        </p>
      </div>
    </Container>
  );
}

export default About;

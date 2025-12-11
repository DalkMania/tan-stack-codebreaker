import { CodeLegend } from "../CodeLegend";
import { CreateCode } from "../CreateCode";
import { Container } from "../layout/Container";

function App() {
  return (
    <Container className="py-12 grid place-items-center print:min-h-screen">
      <CreateCode />
      <CodeLegend />
    </Container>
  );
}

export default App;

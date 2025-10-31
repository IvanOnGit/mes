import { Container } from "./styles";

interface RequestInformationProps {
  title: string;
  subtitle?: string
}

function RequestInformation({ title, subtitle }: RequestInformationProps) {
  return (
    <Container>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <button onClick={() => {document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}}>Solicitá Información</button>
    </Container>
  );
}

export default RequestInformation;
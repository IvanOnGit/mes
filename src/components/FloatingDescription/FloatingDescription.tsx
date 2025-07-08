import { Container } from "./styles";

interface FloatingDescriptionProps {
  description: string;
}

function FloatingDescription({ description }: FloatingDescriptionProps) {
  return (
    <Container>
      <p>{description}</p>
    </Container>
  );
}

export default FloatingDescription;
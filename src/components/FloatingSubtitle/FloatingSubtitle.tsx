import { Container } from "./styles";

interface FloatingSubtitleProps {
  subtitle: string;
}

function FloatingSubtitle({ subtitle }: FloatingSubtitleProps) {
  return (
    <Container>
      <h2>{subtitle}</h2>
    </Container>
  );
}

export default FloatingSubtitle;
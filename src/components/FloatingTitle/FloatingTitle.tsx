import { Container } from "./Styles";

interface FloatingTitleProps {
  title: string;
}

function FloatingTitle({ title }: FloatingTitleProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <span></span>
    </Container>
  );
}

export default FloatingTitle;
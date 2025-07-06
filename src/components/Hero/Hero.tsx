import { Container, Image } from "./styles";

interface HeroProps {
  image: string;
  alt?: string;
}

function Hero({ image }: HeroProps) {
  return (
    <Container>
      <Image src={image} />
    </Container>
  );
}

export default Hero;
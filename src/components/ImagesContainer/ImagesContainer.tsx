import { Container } from "./styles";

interface DynamicImagesProps {
  images: string[];
}

function DynamicImages({ images }: DynamicImagesProps) {
  return (
    <Container>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Imagen ${index + 1}`} />
      ))}
    </Container>
  );
}

export default DynamicImages;
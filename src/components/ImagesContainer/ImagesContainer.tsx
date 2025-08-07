// DynamicImages.tsx
import { useState, useEffect } from "react";
import { Container, ImageContainer, Image, DotsContainer, Dot } from "./styles";

interface DynamicImagesProps {
  images: string[];
}

function DynamicImages({ images }: DynamicImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play: cambiar imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Container>
      {/* Vista Desktop: mostrar todas las imágenes */}
      <div className="desktop-view">
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`Imagen ${index + 1}`} />
        ))}
      </div>

      {/* Vista Mobile: carrusel automático */}
      <div className="mobile-view">
        <ImageContainer>
          <Image 
            src={images[currentIndex]} 
            alt={`Imagen ${currentIndex + 1}`} 
          />
        </ImageContainer>

        <DotsContainer>
          {images.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToImage(index)}
            />
          ))}
        </DotsContainer>
      </div>
    </Container>
  );
}

export default DynamicImages;
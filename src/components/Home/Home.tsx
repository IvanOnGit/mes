import Carrousel from '../Carrousel/Carrousel';
import Navbar from '../Navbar/Navbar';
import { Container } from './styles';

function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Carrousel />
      </Container>
    </>
  );
}

export default Home;
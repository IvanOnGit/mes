import Carrousel from '../Carrousel/Carrousel';
import MoreInfo from '../MoreInfo/MoreInfo';
import Navbar from '../Navbar/Navbar';
import { Container } from './styles';

function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Carrousel />
        <MoreInfo />
      </Container>
    </>
  );
}

export default Home;
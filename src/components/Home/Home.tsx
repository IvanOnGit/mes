import Carrousel from '../Carrousel/Carrousel';
import Contact from '../Contact/Contact';
import MoreInfo from '../MoreInfo/MoreInfo';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import { Container } from './styles';

function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Carrousel />
        <MoreInfo />
        <Services />
        <Contact />
      </Container>
    </>
  );
}

export default Home;
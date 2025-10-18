import Carrousel from '../Carrousel/Carrousel';
import Contact from '../Contact/Contact';
import MoreInfo from '../MoreInfo/MoreInfo';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import { Container } from './styles';

function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Carrousel />
        <MoreInfo />
        <Services />
        <Testimonials />
        <Contact />
      </Container>
    </>
  );
}

export default Home;
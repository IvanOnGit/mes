import Eugenia from "../Eugenia/Eugenia";
import Navbar from "../Navbar/Navbar";
import { AboutMeContainer, ButtonsContainer, Container, IconsAndButtons, IconsContainer, TitleAndIcons } from "./styles";

function AboutMe() {

  return (
    <Container>
        <Navbar />
        <Eugenia />
        <AboutMeContainer>
          <span></span>
          <IconsAndButtons>            
            <TitleAndIcons>
              <h1>Sobre mi</h1>
              <IconsContainer>
                  <img src="/images/About me Icon 1.svg" alt="" />
                  <img src="/images/About me Icon 2.svg" alt="" />
                  <img src="/images/About me Icon 3.svg" alt="" />
                  <img src="/images/About me Icon 4.svg" alt="" />
                  <img src="/images/About me Icon 5.svg" alt="" />
                  <img src="/images/About me Icon 6.svg" alt="" />
                  <img src="/images/About me Icon 7.svg" alt="" />
                  <img src="/images/About me Icon 8.svg" alt="" />
                  <img src="/images/About me Icon 9.svg" alt="" />
              </IconsContainer>
            </TitleAndIcons>
            <ButtonsContainer>
              <button>
                  <img src="/images/BioMagister.svg" alt="" />
                  Bio - Magister
              </button>
              <button>
                  <img src="/images/Traveller.svg" alt="" />
                  Viajera
              </button>
              <button>
                  <img src="/images/Investigator.svg" alt="" />
                  Investigadora
              </button>
              <button>
                  <img src="/images/Creator.svg" alt="" />
                  Creadora
              </button>
              <button>
                  <img src="/images/ChangeAgent.svg" alt="" />
                  Agente de Cambio
              </button>
            </ButtonsContainer>
          </IconsAndButtons>
        </AboutMeContainer>
        <div>
          <span></span>
          <div>
            <h1>RECORRIDO PROFESIONAL</h1>
            <img src="" alt="" />
          </div>
          <div>
            <div>
              <h2>Card1</h2>
              <p>Lorem ipsum dolor sit amet</p>
              <button>Ver más</button>
            </div>
            <div>
              <h2>Card2</h2>
              <p>Lorem ipsum dolor sit amet</p>
              <button>Ver más</button>
            </div>
            <div>
              <h2>Card3</h2>
              <p>Lorem ipsum dolor sit amet</p>
              <button>Ver más</button>
            </div>
          </div>
        </div>
    </Container>
  );
}

export default AboutMe;
import Contact from "../Contact/Contact";
import Eugenia from "../Eugenia/Eugenia";
import Navbar from "../Navbar/Navbar";
import { AboutMeContainer, ButtonsContainer, Card, CardsContainer, CollageSection, Container, IconsAndButtons, IconsContainer, Recomendation, RecomendationsContainer, StarsAndText, TitleAndIcons, TitleTreeContainer, TreeContainer, UserFake } from "./styles";

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
        <CollageSection>
          <img src="/images/Collage.svg" alt="" />
          <img src="/images/MySymbols.svg" alt="" />
        </CollageSection>
        <TreeContainer>
          <span></span>
          <TitleTreeContainer>
            <h2>RECORRIDO PROFESIONAL</h2>
            <img src="/images/Tree.svg" alt="" />
          </TitleTreeContainer>
          <CardsContainer>
            <Card>
              <h2>ÁMBITO CORPORATIVO</h2>
              <p>Con más de 30 años de experiencia en el ámbito empresarial, María Eugenia ha desarrollado su carrera en organizaciones de primer nivel como Coca Cola Femsa, Banco Galicia, Banco Tornquist, CTI Móvil y TSU Cosméticos. En su trayectoria, se ha desempeñado como Gerente de Ventas y Responsable de Desarrollo.</p>
              <button>Ver más</button>
            </Card>
            <span />
            <Card>
              <h2>ÁMBITO EDUCATIVO Y FORMATIVO</h2>
              <p>Como formadora de equipos de ventas, María Eugenia ha liderado y disfrutado muchos procesos de entrenamiento y capacitación a lo largo de su carrera, optimizando el desempeño y potenciando el talento de las personas. Además, ha ejercido como docente en talleres de orientación vocacional y desarrollo.</p>
              <button>Ver más</button>
            </Card>
            <span />
            <Card>
              <h2>ÁMBITO DE DESARROLLO HUMANO</h2>
              <p>A partir de 2011, María Eugenia inició un proceso de búsqueda interior y exploración de diversas disciplinas y filosofías tras el fallecimiento de su marido. Este profundo proceso le permitió descubrir un nuevo mundo espiritual y un camino de evolución personal.</p>
              <button>Ver más</button>
            </Card>
          </CardsContainer>
        </TreeContainer>
        <RecomendationsContainer>
          <Recomendation>
            <UserFake />
            <StarsAndText>
              <div>
                <img src="/images/Star.svg" alt="" />
                <img src="/images/Star.svg" alt="" />
                <img src="/images/Star.svg" alt="" />
              </div>
              <p>Referencias de clientes, empresas, entre otras cosas, acá se escriben los opiniones de los clientes de MES o íconos de empresas.</p>
            </StarsAndText>
          </Recomendation>
          <Recomendation>
            <UserFake />
            <StarsAndText>
              <div>
                <img src="/images/Star.svg" alt="" />
                <img src="/images/Star.svg" alt="" />
                <img src="/images/Star.svg" alt="" />
              </div>
              <p>Referencias de clientes, empresas, entre otras cosas, acá se escriben los opiniones de los clientes de MES o íconos de empresas.</p>
            </StarsAndText>
          </Recomendation>
          <Recomendation>
            <UserFake />
            <StarsAndText>
              <div>
                <img src="/images/Star.svg" alt="" />
                <img src="/images/Star.svg" alt="" />
                <img src="/images/Star.svg" alt="" />
              </div>
              <p>Referencias de clientes, empresas, entre otras cosas, acá se escriben los opiniones de los clientes de MES o íconos de empresas.</p>
            </StarsAndText>
          </Recomendation>
        </RecomendationsContainer>
        <Contact />
    </Container>
  );
}

export default AboutMe;
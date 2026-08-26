import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SystemicConsulting from './components/SystemicConsulting/SystemicConsulting';
import AstroConsulting from './components/AstroConsulting/AstroConsulting';
import TalentActivationSystem from './components/TalentActivationSystem/TalentActivationSystem';
import ProfessionalTraining from './components/ProfessionalTraining/ProfessionalTraining';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AboutMe from './components/AboutMe/AboutMe';
import Bio from './components/Bio/Bio';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

// Lista de rutas de la app: la usa tanto el router de cliente como el script
// de prerender (scripts/prerender.mjs) para saber qué páginas generar.
export const routePaths = [
  '/',
  '/biotrascendencia',
  '/consultoria-sistemica',
  '/consultoria-astrologica',
  '/talent-activation-system',
  '/professional-training',
  '/sobre-mi',
];

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biotrascendencia" element={<Bio />} />
        <Route path="/consultoria-sistemica" element={<SystemicConsulting/>} />
        <Route path="/consultoria-astrologica" element={<AstroConsulting/>} />
        <Route path="/talent-activation-system" element={<TalentActivationSystem/>} />
        <Route path="/professional-training" element={<ProfessionalTraining />} />
        <Route path="/sobre-mi" element={<AboutMe />} />
      </Routes>
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
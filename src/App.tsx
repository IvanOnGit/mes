import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SystemicConsulting from './components/SystemicConsulting/SystemicConsulting.tsx';
import AstroConsulting from './components/AstroConsulting/AstroConsulting.tsx';
import TalentActivationSystem from './components/TalentActivationSystem/TalentActivationSystem.tsx';
import ProfessionalTraining from './components/ProfessionalTraining/ProfessionalTraining.tsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.tsx';
import AboutMe from './components/AboutMe/AboutMe.tsx';
import Biotrascendence from './components/Biotrascendence/Biotrascendence.tsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biotrascendencia" element={<Biotrascendence />} />
        <Route path="/consultoria-sistemica" element={< SystemicConsulting/>} />
        <Route path="/consultoria-astrologica" element={< AstroConsulting/>} />
        <Route path="/talent-activation-system" element={< TalentActivationSystem/>} />
        <Route path="/professional-training" element={< ProfessionalTraining />} />
        <Route path="/sobre-mi" element={< AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
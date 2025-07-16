import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Biotrascendence from './components/Biotrascendence/biotrascendence';
import SystemicConsulting from './components/SystemicConsulting/SystemicConsulting';
import AstroConsulting from './components/AstroConsulting/AstroConsulting';
import TalentActivationSystem from './components/TalentActivationSystem/TalentActivationSystem';
import ProfessionalTraining from './components/ProfessionalTraining/ProfessionalTraining';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AboutMe from './components/AboutMe/AboutMe';

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
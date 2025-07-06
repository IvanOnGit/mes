import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Biotrascendence from './components/biotrascendence/biotrascendence';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biotrascendencia" element={<Biotrascendence />} />
      </Routes>
    </Router>
  );
}

export default App;
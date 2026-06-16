import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Agents from './pages/Agents';
import About from './pages/About';
import ScheduleVisit from './pages/ScheduleVisit';
import Contact from './pages/Contact';
import Collections from './pages/Collections';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<ScheduleVisit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <FloatingButtons />
    </BrowserRouter>
  );
}

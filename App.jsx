import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorListingPage from './pages/DoctorListingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoctorListingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
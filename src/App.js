import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Like, Personal, Settings, Card, Search } from './Page';


function App() { 
  return (
    <Router>
      <header>
        <p><Link to={'/'}>Home</Link></p>
        <p><Link to={'/Like'}>Like</Link></p>
        <p><Link to={'/personal-account'}>Personal account</Link></p>
        <p><Link to={'/settings'}>Settings</Link></p>
        <p><Link to={'/card'}>Card</Link></p>
        <p><Link to={'/search'}>Search</Link></p>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Like" element={<Like />} />
        <Route path="/personal-account" element={<Personal />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/card" element={<Card />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;


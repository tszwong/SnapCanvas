import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route, // <-- Add this import
    Link
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import HistoryPage from './pages/HistoryPage';
import MembershipPage from './pages/MembershipPage';

function App() {
    return (
        <Router>
            <div>
                {/* Navigation */}
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/membership">Membership</Link></li>
                        <li>
                            <div className="search-container">
                                <input type="text" placeholder="Search..." />
                                <button>Search</button>
                            </div>
                        </li>
                    </ul>
                </nav>


                {/* Routes */}
                <Routes>
                    <Route path="/about-us" element={<AboutUsPage />} /> {/* <-- Corrected path and used element prop */}
                    <Route path="/history" element={<HistoryPage />} /> {/* <-- Corrected path and used element prop */}
                    <Route path="/membership" element={<MembershipPage />} /> {/* <-- Corrected path and used element prop */}
                    <Route path="/" element={<HomePage />} /> {/* <-- Corrected path and used element prop */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

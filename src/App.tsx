import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { FeaturesPage } from './components/FeaturesPage';
import { SafetyTipsPage } from './components/SafetyTipsPage';
import { AboutPage } from './components/AboutPage';
import { DownloadPage } from './components/DownloadPage';
import { PricingPage } from './components/PricingPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/safety-tips" element={<SafetyTipsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

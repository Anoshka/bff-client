import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import AdoptablesPage from "./pages/AdoptablesPage/AdoptablesPage.jsx";
import DogProfilePage from "./pages/DogProfilePage/DogProfilePage.jsx";
import AdoptionApplicationPage from "./pages/AdoptionApplicationPage/AdoptionApplicationPage.jsx";
import FosterApplicationPage from "./pages/FosterApplicationPage/FosterApplicationPage.jsx";
import HappyTailsPage from "./pages/HappyTailsPage/HappyTailsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/adoptables" element={<AdoptablesPage />} />
        <Route path="/adoptables/:id" element={<DogProfilePage />} />
        <Route path="/apply-to-adopt" element={<AdoptionApplicationPage />} />
        <Route path="/apply-to-foster" element={<FosterApplicationPage />} />
        <Route path="/happy-tails" element={<HappyTailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;

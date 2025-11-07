import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import AdoptablesPage from "./pages/AdoptablesPage/AdoptablesPage.jsx";
import DogProfilePage from "./pages/DogProfilePage/DogProfilePage.jsx";
import AdoptionApplicationPage from "./pages/AdoptionApplicationPage/AdoptionApplicationPage.jsx";
import FosterApplicationPage from "./pages/FosterApplicationPage/FosterApplicationPage.jsx";
import HappyTailsPage from "./pages/HappyTailsPage/HappyTailsPage.jsx";
import FAQPage from "./pages/FAQPage/FAQPage.jsx";
import HelpPage from "./pages/HelpPage/HelpPage.jsx";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Pages from "./components/Pages/Pages.jsx";

// Wrapper component to extract slug from URL params
const DynamicPage = () => {
  const { slug } = useParams();
  return <Pages slug={slug} />;
};

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
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/how-to-help" element={<HelpPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        {/* Dynamic route for Sanity pages - must be after static routes */}
        <Route path="/:slug" element={<DynamicPage />} />
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

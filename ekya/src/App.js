import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import ToteBags from "./pages/ToteBags";
import Gallery from "./pages/Gallery";
import FAQPage from "./pages/FAQPage";
import Contact from "./pages/Contact";
import VolunteerForm from "./pages/VolunteerForm";
function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <Routes>
<Route
  path="/volunteer-form"
  element={<VolunteerForm />}
/>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/team"
          element={<Team />}
        />

        <Route
          path="/events"
          element={<Events />}
        />

        <Route
          path="/volunteer"
          element={<Volunteer />}
        />

        <Route
          path="/donate"
          element={<Donate />}
        />

        <Route
          path="/totebags"
          element={<ToteBags />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/faq"
          element={<FAQPage />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
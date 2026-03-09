import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Process from "./components/process";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Privacy from "./pages/privacy";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/privacy" element={<Privacy />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
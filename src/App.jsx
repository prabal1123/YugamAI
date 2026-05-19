// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/navbar";
// import Hero from "./components/hero";
// import About from "./components/about";
// import Services from "./components/services";
// import Portfolio from "./components/portfolio";
// import Process from "./components/process";
// import Testimonials from "./components/testimonials";
// import Contact from "./components/contact";
// import Footer from "./components/footer";
// import Privacy from "./pages/privacy";
// import DeleteAccount from "./pages/DeleteAccount";

// function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <Portfolio />
//       <Process />
//       <Testimonials />
//       <Contact />
//       <Footer />
      
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Home />} />

//         <Route path="/privacy-policy" element={<Privacy />} />

//         <Route path="/delete-account" element={<DeleteAccount />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
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
import DeleteAccount from "./pages/DeleteAccount";
import WhatsAppButton from "./components/WhatsAppButton";
// import ContactForm from './components/ContactForm';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Attached identification flags to your structural markup */}
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="process"><Process /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><Contact /></div>
      {/* <ContactForm /> */}
      <WhatsAppButton />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
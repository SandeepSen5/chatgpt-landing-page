import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import About from "./components/About";
import ChatPreview from "./components/ChatPreview";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <ChatPreview />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
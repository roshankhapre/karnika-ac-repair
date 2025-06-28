import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import TrustFactors from "./components/TrustFactors";
import About from "./components/About";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Pricing />
        <Services />
        <WhyChooseUs />

        <TrustFactors />

        <Process />
        <Testimonials />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

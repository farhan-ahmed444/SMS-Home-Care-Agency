import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import CareProcess from "./components/CareProcess";
import DementiaSupport from "./components/DementiaSupport";
import Testimonials from "./components/Testimonials";
import Registration from "./components/Registration";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <CareProcess />
        <DementiaSupport />
        <Testimonials />
        <Registration />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

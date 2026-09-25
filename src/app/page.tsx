import Hero from "../components/Hero";
import About from "../components/About";
import Treatments from "../components/Treatments";
import Results from "../components/Results";
import Experience from "../components/Experience";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Treatments />
        <WhyChooseUs />
        <Results />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

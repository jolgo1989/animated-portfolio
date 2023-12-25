import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Test from "./Test";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />{" "}
      </section>
      <section>
        <Services />
      </section>
      <section id="Porfolio">
        <Parallax type="portfolio" />{" "}
      </section>
      <section>Porfolio1</section>
      <section>Porfolio2</section>
      <section id="Contact">Contact</section>
      {/* <Test />
    <Test /> */}
    </div>
  );
};

export default App;

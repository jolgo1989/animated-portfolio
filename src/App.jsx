import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section id="Services">Perallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Porfolio1</section>
      <section>Porfolio2</section>
      <section id="Contact">Contact</section>
      {/* <Test />
    <Test /> */}
    </div>
  );
};

export default App;

import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section className="home">
        <Hero />
      </section>
      <section>Hero</section>
      <section>Hero</section>
      <section>Hero</section>
    </div>
  );
};

export default App;

import "./app.scss";
import Hero from "./components/hero/Hero";

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

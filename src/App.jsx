import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./components/data";

function App() {
  const cardElemets = data.map((element) => {
    return (
      <Card
        key={element.id} // Add a unique "key" prop
        item={element}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="card-list">{cardElemets}</section>
    </>
  );
}

export default App;

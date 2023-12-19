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
        img={element.coverImg}
        title={element.title}
        reviewCount={element.stats.reviewCount}
        rating={element.stats.rating}
        location={element.location}
        price={element.price}
        openSpots={element.openSpots}
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

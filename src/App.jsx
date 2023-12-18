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
        country={element.location}
        price={element.price}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Card
        img="/images/image 12.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      /> */}
      {cardElemets}
    </>
  );
}

export default App;

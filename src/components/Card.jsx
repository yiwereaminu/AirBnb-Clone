export default function Card() {
  return (
    <div className="parent-card">
      <div className="card">
        <img
          src="images/image 12.png"
          className="card-image"
          alt="photo of Kattie zafares"
        ></img>
        <div className="rating-location">
          <img src="images/Star 1-1.png" alt="star" className="star"></img>
          <p>5.0 (6)-USA</p>
        </div>
        <div className="card-details">
          <p>Life lessons with Katie zafares</p>
          <p>
            <b>From $136</b> /person
          </p>
        </div>
      </div>
    </div>
  );
}

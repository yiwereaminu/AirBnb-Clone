import PropTypes from "prop-types"; // Import PropTypes
export default function Card(props) {
  return (
    <div className="parent-card">
      <div className="card">
        <img
          src={props.img}
          className="card-image"
          alt="photo of Kattie zafares"
        ></img>
        <div className="rating-location">
          <img src="images/Star 1-1.png" alt="star" className="star"></img>
          <span> {props.rating} </span>
          <span className="gray">({props.reviewCount}) .</span>
          <span className="gray">{props.country}</span>
        </div>
        <div className="card-details">
          <p>{props.title}</p>
          <p>
            <b>From ${props.price}</b> /person
          </p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviewCount: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

import PropTypes from "prop-types"; // Import PropTypes
export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) badgeText = "SOLD OUT";
  else if (props.location === "Online") badgeText = "ONLINE";

  return (
    <div className="parent-card">
      <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img
          src={props.img}
          className="card-image"
          alt="photo of Kattie zafares"
        ></img>
        <div className="rating-location">
          <img src="images/Star 1-1.png" alt="star" className="star"></img>
          <span> {props.rating} </span>
          <span className="gray">({props.reviewCount}) .</span>
          <span className="gray">{props.location}</span>
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
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  openSpots: PropTypes.number.isRequired,
};

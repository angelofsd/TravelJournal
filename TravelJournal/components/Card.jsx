import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="card">
      <div className="pics">
        <img className="images" src={`../${props.item.imageUrl}`} />
      </div>
      <div className="details">
        <div className="top-line">
          <img
            src="../mapIcon.webp"
            className="map-icon"
            alt="a little red map icon"
          />
          <h5 className="country-name">{props.item.location}</h5>
          <a className="map-url" href={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1>{props.item.title}</h1>
        <div className="second-line">
         <h5 className="dates">{props.item.startDate} - {props.item.endDate}</h5> 
        </div>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object,
  imageUrl: PropTypes.string,
};

export default Card;

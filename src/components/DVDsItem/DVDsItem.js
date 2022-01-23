import "./DVDsItem.css";
import icon from "../../images/imageicon.png";

function DVDsItem(props) {
  return (
    <div className="dvdItem">
      <div className="content">
        <div className="image">
          <img src={icon} alt="icon" />
        </div>
        <div className="product">
          <h3>{props.movie}</h3>
          <p>{props.genre.join(" | ")}</p>
          <p>{props.year}</p>
        </div>
      </div>
      <div className="price-stock">
        <p>{props.price}</p>
        <p>Stock: {props.stock}</p>
      </div>
      <div className="buttonContainer">
        <button>Buy</button>
      </div>
    </div>
  );
}

export default DVDsItem;

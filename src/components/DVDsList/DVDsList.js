import "./DVDsList.css";
import DVDsItem from "../DVDsItem/DVDsItem";

function DVDsList(props) {
  return (
    <div className="dvdContainer">
      {props.DVDs.map((DVD) => (
        <DVDsItem
          key={DVD.id}
          id={DVD.id}
          title={DVD.title}
          movie={DVD.movie}
          genre={DVD.genre}
          year={DVD.year}
          price={DVD.price}
          stock={DVD.stock}
        />
      ))}
    </div>
  );
}
export default DVDsList;

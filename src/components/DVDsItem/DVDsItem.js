import './DVDsItem.css';


function DVDsItem(props){
    return (
    <div className="dvdItem">
        <div className="image">
        </div>
        <div className="content">
            <h3>{props.movie}</h3>
            <p>{props.genre.join(" | ")}</p>
            <p>{props.year}</p>
            <p>{props.price}</p>
            <p>Stock: {props.stock}</p>
        </div>
        <div className="actions">
        </div>        
    </div>
    )
}

export default DVDsItem;
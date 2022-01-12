import MeetupItem from './Meetupitem';
import classes from './MeetupList.module.css';

function MeetupList(props){
    return (   
        <ul className={classes.list}>
            {props.meetups.map(meetup => ( <MeetupItem
                key={meetup.id}
                id={meetup.id}
                title={meetup.title}
                movie={meetup.movie}
                genre={meetup.genre}
                year={meetup.year}
                price={meetup.price}
                stock={meetup.stock}
                />
                ))}
        </ul>
        )
}
export default MeetupList;
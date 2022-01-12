import { useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import classes from './AllMeetup.css';

      
function AllMeetupsPage() {
  const [loadedMeetups, setLoaderMeetups] = useState([]);


        fetch ("DVDdata.json")
        .then(response => {
            return response.json();
        }).then(data =>{
            setLoaderMeetups(data);
        });

        return (
          <section className={classes.display}>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
          </section>
        );
      }
      
      export default AllMeetupsPage;

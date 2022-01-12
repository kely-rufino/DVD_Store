import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import FilterGenre from "../components/meetups/FilterGenre";
import MeetupList from "../components/meetups/MeetupList";
import classes from "./AllMeetup.css";

function AllMeetupsPage() {
  const [loadedMeetups, setLoaderMeetups] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(" ");

  useEffect(() => {
    fetch("DVDdata.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoaderMeetups(data);
      });
  }, []);

  const filteredMovies = loadedMeetups.filter((item) => {
    return selectedGenre === " " ? true : item.genre.includes(selectedGenre);
  });

  return (
    <section className={classes.display}>
      <h1 className="h1"> All Meetups</h1>
      <FilterGenre onChange={setSelectedGenre} selectedGenre={selectedGenre} />
      <MeetupList meetups={filteredMovies} />
    </section>
  );
}

export default AllMeetupsPage;

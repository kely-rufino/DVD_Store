import { useEffect, useState } from "react";
import FilterGenre from "../components/DVDsItemsandlists/FilterGenre";
import DVDsList from "../components/DVDsItemsandlists/DVDsList";
import { Pagination } from "@material-ui/lab";

function AllDVDsPage() {
  const [DVDsStorage, loadDVDsStorage] = useState([]);

  const [selectedGenre, setSelectedGenre] = useState(" ");

  const filteredMovies = DVDsStorage.filter((item) => {
    return selectedGenre === " " ? true : item.genre.includes(selectedGenre);
  });

  useEffect(() => {
    fetch("DVDdata.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        loadDVDsStorage(data);
      });
  }, []);

  console.log({});
  return (
    <section>
      <div>
        <Pagination count={10} color="primary" />
      </div>
      <h1>All DVDs</h1>
      <FilterGenre onChange={setSelectedGenre} selectedGenre={selectedGenre} />
      <DVDsList DVDs={filteredMovies} />
    </section>
  );
}

export default AllDVDsPage;

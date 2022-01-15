import { useEffect, useState } from "react";
import FilterGenre from "../components/FilterGenre";
import DVDsList from "../components/DVDsList/DVDsList";
import DVDsPagination from "../components/DVDsPagination/DVDsPagination";
const pageSize = 20;

function AllDVDsPage() {
  const [DVDsStorage, loadDVDsStorage] = useState([]);

  const [selectedGenre, setSelectedGenre] = useState(" ");

  const [selectedPage, setSelectedPage] = useState(1);

  const filteredMovies = DVDsStorage.filter((item) => {
    return selectedGenre === " " ? true : item.genre.includes(selectedGenre);
  });

  const movies = filteredMovies.slice(
    (selectedPage - 1) * pageSize,
    selectedPage * pageSize
  );
  
  useEffect(() => {
    setSelectedPage(1);
  }, [selectedGenre]);

  useEffect(() => {
    fetch("DVDdata.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        loadDVDsStorage(data);
      });
  }, []);

  console.log(movies.length, selectedPage);
  return (
    <section>
      <DVDsPagination
        onChange={setSelectedPage}
        numberOfMovies={filteredMovies.length}
        pageSize={pageSize}
      />
      <h1>All DVDs</h1>
      <FilterGenre onChange={setSelectedGenre} selectedGenre={selectedGenre} />
      <DVDsList DVDs={movies} />
    </section>
  );
}

export default AllDVDsPage;

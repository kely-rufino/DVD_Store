import { useEffect, useState } from "react";
import FilterGenre from "../components/FilterGenre";
import DVDsList from "../components/DVDsList/DVDsList";
import DVDsPagination from "../components/DVDsPagination/DVDsPagination";
const pageSize = 20;

function AllDVDsPage() {
  const [DVDsStorage, loadDVDsStorage] = useState([]);

  const [selectedGenre, setSelectedGenre] = useState(" ");

  const [selectedSort, setSelectedSort] = useState("asc");

  const [selectedPage, setSelectedPage] = useState(1);
  const [searchCriteria, setSearchCriteria] = useState("");

  const filteredMovies = DVDsStorage.filter((item) => {
    return selectedGenre === " " ? true : item.genre.includes(selectedGenre);
  })
    .filter((item) => {
      return searchCriteria !== ""
        ? item.movie.toLowerCase().search(searchCriteria.toLowerCase()) !== -1
        : true;
    })
    .sort((a, b) => {
      const priceA = Number.parseFloat(a.price.replace("£", ""));
      const priceB = Number.parseFloat(b.price.replace("£", ""));
      return selectedSort === "asc" ? priceA - priceB : priceB - priceA;
    });
  console.log(filteredMovies);

  const movies = filteredMovies.slice(
    (selectedPage - 1) * pageSize,
    selectedPage * pageSize
  );

  useEffect(() => {
    console.log(selectedSort);
  }, [selectedSort]);

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
      <h1>All DVDs</h1>
      <div>
        <input
          type="search"
          onChange={(e) => setSearchCriteria(e.target.value)}
          placeholder="Search here..."
        />
      </div>
      <FilterGenre onChange={setSelectedGenre} selectedGenre={selectedGenre} />
      <select onChange={(e) => setSelectedSort(e.target.value)}>
        <option value="asc">Price: low to high</option>
        <option value="des">Price: high to low</option>
      </select>
      <DVDsList DVDs={movies} />
      <DVDsPagination
        onChange={setSelectedPage}
        numberOfMovies={filteredMovies.length}
        pageSize={pageSize}
      />
    </section>
  );
}

export default AllDVDsPage;

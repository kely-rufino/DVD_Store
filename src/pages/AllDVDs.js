import { useEffect, useState } from "react";
import FilterGenre from "../components/FilterGenre";
import DVDsList from "../components/DVDsList/DVDsList";
import DVDsPagination from "../components/DVDsPagination/DVDsPagination";
const pageSize = 20;

function AllDVDsPage() {
  const [DVDsStorage, loadDVDsStorage] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(" ");
  const [selectedSort, setSelectedSort] = useState("price-asc");
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

      switch (selectedSort) {
        case "price-asc":
          if (priceA > priceB) return 1;
          if (priceA < priceB) return -1;
          break;
        case "price-des":
          if (priceA > priceB) return -1;
          if (priceA < priceB) return 1;
          break;
        case "year-asc":
          if (a.year > b.year) return 1;
          if (a.year < b.year) return -1;
          break;
        case "year-des":
          if (a.year > b.year) return -1;
          if (a.year < b.year) return 1;
          break;
        default:
        // code block
      }
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

  return (
    <section>
      <div className="navBar">
        <div className="title">
          <h1>Just for Popcorn</h1>
        </div>
        <div className="navBarItemContainer">
          <div className="navBarItem">
            <input
              type="search"
              onChange={(e) => setSearchCriteria(e.target.value)}
              placeholder="Search here..."
            />
          </div>
          <div className="navBarItem">
            <FilterGenre
              onChange={setSelectedGenre}
              selectedGenre={selectedGenre}
            />
          </div>
          <div className="navBarItem">
            <select onChange={(e) => setSelectedSort(e.target.value)}>
              <option value="price-asc">Price: low to high</option>
              <option value="price-des">Price: high to low</option>
              <option value="year-asc">Year: low to high</option>
              <option value="year-des">Year: high to low</option>
            </select>
          </div>
        </div>
      </div>

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

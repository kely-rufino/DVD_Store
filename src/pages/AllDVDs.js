import { useState } from 'react';
import FilterGenre from '../components/DVDsItemsandlists/FilterGenre';
import DVDsList from '../components/DVDsItemsandlists/DVDsList';

      
function AllDVDsPage() {
  const [DVDsStorage, LoadDVDsStorage] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(" ");
  
  const filteredMovies = DVDsStorage.filter((item) => {
    return selectedGenre === " " ? true : item.genre.includes(selectedGenre);
  });


        fetch("DVDdata.json")
        .then(response => {
            return response.json();
        }).then(data =>{
            LoadDVDsStorage(data);
        });
        

        return (
          <section>
            <h1>All DVDs</h1>
            <FilterGenre onChange={setSelectedGenre} />
            <DVDsList DVDs={filteredMovies} selectedGenre={selectedGenre}/>
          </section>
        );
      }
      
      export default AllDVDsPage;

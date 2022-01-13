import { useState } from 'react';
import DVDsList from '../components/DVDsItemsandlists/DVDsList';

      
function AllDVDsPage() {
  const [DVDsStorge, LoadDVDsStorge] = useState([]);


        fetch("DVDdata.json")
        .then(response => {
            return response.json();
        }).then(data =>{
            LoadDVDsStorge(data);
        });

        return (
          <section>
            <h1>All DVDs</h1>
            <DVDsList DVDs={DVDsStorge}/>
          </section>
        );
      }
      
      export default AllDVDsPage;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllDVDsPage from './pages/AllDVDs.js';
import { useState } from 'react';

function App() {

  const [ cart, setCart ] = useState ([])
  const [ DVDsStorge, LoadDVDsStorge ] = useState([])
  const [ totalcost, setTotalcost] = useState(0.0)

  return (
    <div>
      <BrowserRouter>      
        <Routes>
          <Route path='/' element={<AllDVDsPage cart={cart} 
                                                setCart={setCart}
                                                DVDsStorge = {DVDsStorge}
                                                LoadDVDsStorge={LoadDVDsStorge}
                                                totalcost = {totalcost}
                                                setTotalcost={setTotalcost}/>}></Route>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
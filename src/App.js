import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllDVDsPage from './pages/AllDVDs.js';
import { useState } from 'react';

function App() {

  const [ cart, setCart ] = useState ([])
  const [ totalcost, setTotalcost] = useState(0)

  return (
    <div>
      <BrowserRouter>      
        <Routes>
          <Route path='/' element={<AllDVDsPage cart={cart} setCart={setCart} totalcost={totalcost} setTotalcost={setTotalcost}/>}></Route>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
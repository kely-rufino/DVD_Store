import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllDVDsPage from './pages/AllDVDs.js';


function App() {
  return (
    <div >
      <BrowserRouter>      
        <Routes>
          <Route path='/' element={<AllDVDsPage/>}></Route>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
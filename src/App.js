import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<AllMeetupsPage/>}></Route>
        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
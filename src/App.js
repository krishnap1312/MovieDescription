import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LinkedInProfile from './Frontend/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LinkedInProfile></LinkedInProfile>}></Route>
          <Route path='/MovieDescription' element={<LinkedInProfile></LinkedInProfile>}></Route>
        </Routes>
      </BrowserRouter>
      <LinkedInProfile></LinkedInProfile>
    </div>
  );
}

export default App;

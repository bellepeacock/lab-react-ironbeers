import './App.css';
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div className="container">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/beers" element={<AllBeers />}/>
      <Route path="/new-beer" element={<NewBeer />}/>
      <Route path="/beers/:beerId" element={<SingleBeer />}/>

    </Routes>

      
    </div>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import beersImg from '../assets/beers.png';
import newBeerImg from '../assets/new-beer.png';
import randomBeerImg from '../assets/random-beer.png';



const Home = () => {
  return (
    <div>
        <Link to="/beers" className="allBeersLink">
            <img src={beersImg} alt='beers-pic' />
            <h1>All Beers</h1>
            <p>beerbeerbeerbeerberebererere</p>
        </Link>

        <Link to="/new-beer">
            <img src={newBeerImg} alt='new-beer-pic' />
            <h1>New Beer</h1>
            <p>addabeerbeerbeerbeerberebererere</p>
        
        </Link>

        <Link to="/beers/random">
            <img src={randomBeerImg} alt='random-beer-pic' />
            <h1>Random Beer</h1>
            <p>findabeerbeerbeerbeerberebererere</p>
        </Link>

    </div>
  )
}

export default Home;

import React from 'react';
import Header from './Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleBeer = () => {

  const [beer, setBeer] = React.useState([]);

  const {beerId} = useParams();

  React.useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then((response) => {
      setBeer(response.data);
    })
  }, [])

  console.log(beer)
  
    const { image_url, name, tagline, contributed_by, first_brewed, attenuation_level, description } = beer;

  return (
    <>
      <Header />
      <div>
        <img src={image_url} alt={`${name} bottle`}/>
        <h1>{name}</h1>
        <h2>{tagline}</h2>
        <h3>{first_brewed}</h3>
        <p>Attenuation level: {attenuation_level}</p>
        <p>{description}</p>
        <p>{contributed_by}</p>
      </div>
    </>
  )
};

export default SingleBeer;

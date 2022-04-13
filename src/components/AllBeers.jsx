import React from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom'

const AllBeers = () => {

  const [beerList, setBeerList] = React.useState([]);

  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`).then((response) => {
      setBeerList(response.data);
    })
  }, [query])

  console.log(beerList)

  const beerData = beerList.map((beer) => {
    const { _id, image_url, name, tagline, contributed_by } = beer;

    return (
        <li key={_id}>
          <img src={image_url} alt={`${name} packaging`}/>
          <h1>{name}</h1>
          <h2>{tagline}</h2>
          <p>{contributed_by}</p>
          <Link to={`/beers/${_id}`}>See details</Link>
        </li>
    )
  })

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  }

  return (
    <>
      <Header />
      <input type="text" name="search" onChange={handleChange} />
      <ul>
       {beerData}  
      </ul>

    </>
  )


}

export default AllBeers


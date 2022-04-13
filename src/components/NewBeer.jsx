import React from 'react';
import Header from './Header';
import axios from 'axios';

const NewBeer = () => {

  const [ newBeer, setNewBeer] = React.useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
    .then((response) => {
      console.log(response.data);
      setNewBeer({
        name:'', 
        tagline:'', 
        description:'',
        brewers_tips:'',
        first_brewed:'',
        contributed_by:'',
        attenuation_level:null
      })
    }).catch(error => console.log(error))
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewBeer({...newBeer, [name]:value}); 
    console.log(newBeer)
  };

  return (
    <>
      <Header />
        <div>
          <form className="form" onSubmit={handleSubmit}>
              <label>
                Name:
                 <input type="text" name="name" onChange={handleChange} value={newBeer.name} />
              </label>

              <label>
                Tagline:
                 <input type="text" name="tagline" onChange={handleChange} value={newBeer.tagline} />
              </label>

              <label>
                Description:
                 <textarea type="text" name="description" onChange={handleChange} value={newBeer.description}  />
              </label>

              <label>
                First brewed:
                 <input type="text" name="first_brewed" onChange={handleChange} value={newBeer.first_brewed} />
              </label>
            
              <label>
                Brewers tips:
                 <input type="text" name="brewers_tips" onChange={handleChange} value={newBeer.brewers_tips} />
              </label>

              <label>
                Attenuation level:
                 <input type="number" name="attenuation_level" onChange={handleChange} value={newBeer.attenuation_level} />
              </label>

              <label>
                Contributed by:
                 <input type="text" name="contributed_by" onChange={handleChange} value={newBeer.contributed_by} />
              </label>

              <button type="submit">ADD NEW</button>

          </form>


        </div>
    </>
  )
}

export default NewBeer

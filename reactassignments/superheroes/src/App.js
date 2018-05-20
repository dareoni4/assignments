import React from 'react';
import SuperHero from './SuperHero';
import data from './superhero.json';
import './style.css'

const App = () => {
  
    const sayCatchphrase = (catchPhrase) => {
      alert(catchPhrase)
    }

    const mappedHeros = data.superHeroes.map((hero, i) => {
      return (
        <SuperHero 
          name={hero.name} 
          sayCatchphrase={sayCatchphrase} 
          catchPhrase={hero.catchPhrase}
          imgUrl={hero.imgUrl} 
          key={hero.name + i} />
      )
    })

    return (
      <div className="container">
        { mappedHeros }
      </div>
    );
}

export default App;



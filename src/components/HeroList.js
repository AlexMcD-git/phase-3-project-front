import React, { useEffect, useState } from 'react'
import HeroCard from './HeroCard'
import DetailedHero from './DetailedHero'


function HeroList() {
    const [heroes, setHeroes] = useState([])
    const [activeHero, setActiveHero] = useState(null)

    useEffect(()=>{fetch('http://localhost:9393/heros/alive')
    .then(r=>r.json())
    .then(setHeroes)}
    ,[])
  
    console.log(heroes)


  return (
    <div>
        {activeHero==null?
            <>
            <h1>Select a hero to send on a perilous quest(by clicking their box)</h1>
            <div className="imgWrapper">{heroes.map(hero => <HeroCard key={hero.id} hero={hero} setActiveHero={setActiveHero}/>)}</div>
            </>
        :
            <DetailedHero hero={heroes.filter(hero => hero.id === activeHero)[0]} setActiveHero={setActiveHero}/>
        }

    </div>
  )
}

export default HeroList
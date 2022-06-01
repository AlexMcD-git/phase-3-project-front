import React, { useState, useEffect } from 'react'

function DetailedHero({hero, setActiveHero}) {
    const [quests, setQuests] = useState([])
    useEffect(()=>{fetch('http://localhost:9393/quests')
    .then(r=>r.json())
    .then(setQuests)}
    ,[])


    console.log(hero)
    console.log(quests)
    let reducedStrength = hero.items.reduce((a,item)=>a+item.str_boost, hero.strength)
    let reducedIntelligence = hero.items.reduce((a,item)=>a+item.int_boost, hero.intelligence)

  return (
    <div>
        <button onClick={()=>setActiveHero(null)}>Return to hero list</button>
        <h1>{hero.name}, the {hero.successful_quests>3?"veteran":"novice"} adventurer</h1>
        <h2>Has stats: Strength:{hero.strength}, Intelligence:{hero.intelligence}</h2>
        <ul>Item Inventory:
            {hero.items.map(item=><li>{item.name} (Str:{item.str_boost}, Int:{item.int_boost})</li>)}
        </ul>
        <h2>Bringing their total stats to Strength:{reducedStrength}, Intelligence:{reducedIntelligence}</h2>
    </div>
  )
}

export default DetailedHero
import React, { useState, useEffect } from 'react'
import Tombstone from './Tombstone'

function Graveyard() {
    const [deadHeroes, setDeadHeroes] = useState([])

    useEffect(()=>{fetch('http://localhost:9393/heros/dead')
    .then(r=>r.json())
    .then(setDeadHeroes)}
    ,[])

    console.log(deadHeroes)

  return (
    <div>
        Welcome to the graveyard, where we honor heroes passed.
        <div className="imgWrapper">{deadHeroes.map(hero => <Tombstone key={hero.id} hero={hero}/>)}</div>
    </div>
  )
}

export default Graveyard
import React, { useEffect, useState } from "react"

const KittyLit = () => {
  const [lit, setLit] = useState("")
  
  const another = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((i) => setLit(i.fact))
  }

  useEffect(another, [])

  return (
    <div>
      {lit} <br />
      <button onClick={() => another()}>See another fact</button>
    </div>
  )
}

export default KittyLit

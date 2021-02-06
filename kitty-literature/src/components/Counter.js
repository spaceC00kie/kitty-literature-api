import React, { useEffect, useState } from "react"

const Counter = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)


  return (
    <>
      <button
        onClick={() => {
          setCount1(count1 + 3)
          setCount2(count2 + 1)
        }}
      >
        {count1} | {count2}
      </button>
    </>
  )
}

export default Counter

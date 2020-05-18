import React, { createContext, useEffect, useState } from 'react'
import { baseURL } from '../constants'
import { values, compose, tap } from 'ramda'

export const FishContext = createContext()

const peek = tap(console.log)
const errorLog = e => {
  console.log(`Error log\n${e}`)
}

const FishContextProvider = ({ children }) => {

  const [fishList, setFishList] = useState([])
  
  useEffect(() => {
    fetch(`${baseURL}/fish`)
    .then(res => res.json())
    .then(compose(setFishList, values))
    .catch(errorLog)
  }, [])

  return (
    <FishContext.Provider value={{fishList}}>
      {children}
    </FishContext.Provider>
  )

}

export default FishContextProvider
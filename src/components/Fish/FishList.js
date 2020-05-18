import React, { useContext } from 'react'
import { map } from 'ramda'
import { FishContext } from '../../contexts/FishContext'
import Fish from './Fish'

const mapFish = map(Fish)
// const mapFishLinks = map(path(['name', 'name-en']))

const FishListWrapper = ({ children }) => 
  <div>
    <h1>Fish:</h1>
    <ul>
      {children}
    </ul>
  </div>

const FishList = () => {

  const { fishList } = useContext(FishContext)

  return (
    <FishListWrapper>
      {mapFish(fishList)}
    </FishListWrapper>
  )
}

export default FishList
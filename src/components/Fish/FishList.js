import React, { useContext } from 'react'
import { map, compose, toUpper, head, tail, join, split, path } from 'ramda'
import { FishContext } from '../../contexts/FishContext'
import Fish from './Fish'

const capFirst = compose(toUpper, head)
const formatName = s => `${capFirst(s)}${tail(s)}`
const capAllFirst = compose(join(' '), map(formatName), split(' '))
const getNames = compose(capAllFirst, path(['name', 'name-en']))
const mapFish = map(compose(Fish, getNames))

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
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { map, path, prop, compose } from 'ramda'
import { formatTitle } from '../../utilities/helpers'
import { FishContext } from '../../contexts/FishContext'

const getName = compose(formatTitle, path(['name', 'name-en']))
const getFileName = prop('file-name')
const getFishId = path(['props', 'to', 'state', 'id'])
const makePathProp = fish => ({
  pathname: `/fish/${getFileName(fish)}`,
  state: fish
})
const FishLink = fish => <Link to={makePathProp(fish)}>{`${getName(fish)}`}</Link>
const LiWrapper = component => <li key={getFishId(component)}>{component}</li>
const FishListWrapper = component => 
  <section id="fish-list">
    <h1>Fish:</h1>
    <ul>{component}</ul>
  </section>
const mapFishLinks = compose(FishListWrapper, map(compose(LiWrapper, FishLink)))

const FishList = () => {
  const { fishList } = useContext(FishContext)
  return mapFishLinks(fishList)
}

export default FishList
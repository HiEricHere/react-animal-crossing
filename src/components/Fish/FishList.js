import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { map, path, prop, compose } from 'ramda'
import { FishContext } from '../../contexts/FishContext'

const fishId = prop('id')
const getName = path(['name', 'name-en'])
const getFileName = prop('file-name')
const makePathProp = fish => ({
  pathname: `/fish/${getFileName(fish)}`,
  state: fish
})
const FishLink = fish => 
  <li key={fishId(fish)}>
    <Link to={makePathProp(fish)}>{`${getName(fish)}`}</Link>
  </li>
const FishListWrapper = children => 
  <section id="fish-list">
    <h1>Fish:</h1>
    <ul>{children}</ul>
  </section>
const mapFishLinks = compose(FishListWrapper, map(FishLink))

const FishList = () => {
  const { fishList } = useContext(FishContext)
  return mapFishLinks(fishList)
}

export default FishList
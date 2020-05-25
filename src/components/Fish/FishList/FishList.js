import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { map, path, prop, compose, toLower, sort, descend, ascend } from 'ramda'
import { formatTitle } from '../../../utilities/helpers'
import OptionSelect from './OptionSelect'
import { FishContext } from '../../../contexts/FishContext'

// Link list
const getNameTitle = compose(formatTitle, path(['name', 'name-USen']))
const getIconURI = path(['icon_uri'])
const getFileName = prop('file-name')
const getFishId = path(['props', 'to', 'state', 'id'])
const makePathProp = fish => ({
  pathname: `/fish/${getFileName(fish)}`,
  state: fish
})
const FishLink = fish => 
  <Link to={makePathProp(fish)}>
    <img src={getIconURI(fish)} alt={getNameTitle(fish)}/>
    <span>{getNameTitle(fish)}</span>
  </Link>
const LiWrapper = component => <li key={getFishId(component)}>{component}</li>
const mapFishLinks = map(compose(LiWrapper, FishLink))

// Sorting
const nameOptionAsc = ascend(compose(toLower, path(['name', 'name-USen'])))
const nameOptionDesc = descend(compose(toLower, path(['name', 'name-USen'])))
const priceOptionAsc = ascend(prop('price'))
const priceOptionDesc = descend(prop('price'))
const orderReducer = type => {
  switch(type){
    case 'name-asc': return nameOptionAsc
    case 'name-desc': return nameOptionDesc
    case 'price-asc': return priceOptionAsc
    case 'price-desc': return priceOptionDesc
    default: return nameOptionAsc
  }
}

const makeFishListWith = option => compose(mapFishLinks, sort(orderReducer(option)))

const FishList = () => {
  const { fishList } = useContext(FishContext)
  const [orderType, setOrderType] = useState('name-asc')
  const handleChange = compose(setOrderType, path(['target', 'value']))

  return (
    <section id="fish-list">
      <h1>Fish:</h1>
      <OptionSelect handleChange={handleChange} order={orderType}/>
      <ul>
        {makeFishListWith(orderType)(fishList)}
      </ul>
    </section>
  )
}

export default FishList
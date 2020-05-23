import React from 'react'
import { Link } from 'react-router-dom'
import { 
  prop, path, pathSatisfies, 
  compose, equals, pick, 
  ifElse, always, lensPath,
  view, lensProp, slice } from 'ramda'
import { formatTitle, mapFunctions } from '../../utilities/helpers'

const lensFish = lensPath(['location', 'state'])
const getFromFish = xLens => view(compose(lensFish, xLens))

// Image
// const fishImgUrl = 

// Name
const lensName = lensPath(['name', 'name-en'])
const Name = name => <h3 key={name}>{name}</h3>
const makeName = compose(Name, formatTitle, getFromFish(lensName))

// Meta - availability
const lensAvailability = compose(lensFish, lensProp('availability'))
// months, time, location, rarity
const monthAvailability = ifElse(
  pathSatisfies(equals(true), ['availability', 'isAllYear']),
  always({ 'month-northern': 'All year', 'month-southern': 'All year' }),
  compose(pick(['month-northern', 'month-southern']), prop('availability'))
)
const timeAvailability = ifElse(
  pathSatisfies(equals(true), ['availability', 'isAllDay']),
  always('All day'),
  path(['availability', 'time'])
)

const getRarity = view(compose(lensAvailability, lensProp('rarity')))
const Rarity = rarity => <p key={rarity}>Rarity: {rarity}</p>
const makeRarity = compose(Rarity, getRarity)

const getLocation = view(compose(lensAvailability, lensProp('location')))
const Location = location => <p key={location}>Where to find: {location}</p>
const makeLocation = compose(Location, getLocation)

// Size
const getSize = getFromFish(lensProp('shadow'))
const Size = size => <p key={size}>Size: {size}</p>
const makeSize = compose(Size, getSize)

// Price
// Nook's Cranny
// const intToString = x => x.toString()
// const formatPrice = x => convert to string then array
const getPrice = getFromFish(lensProp('price'))
const NookPrice = price => <li key={price.toString()}>Nook's Cranny: {price}</li>
const makeNookPrice = compose(NookPrice, getPrice)
// CJ
const getPriceCJ = getFromFish(lensProp('price-cj'))
const CJPrice = price => <li key={price.toString()}>CJ: {price}</li>
const makeCJPrice = compose(CJPrice, getPriceCJ)
const PriceWrapper = children => 
  <React.Fragment key="price">
    <h4>Price</h4>
    <ul>{children}</ul>
  </React.Fragment>
const makePrice = compose(PriceWrapper, mapFunctions([makeNookPrice, makeCJPrice]))

// Description
// Catch
const getCatchPhrase = getFromFish(lensProp('catch-phrase'))
// Blathers
const getBlathersPhrase = getFromFish(lensProp('museum-phrase'))
const Quote = quote => <blockquote key={`key-${slice(0,10,quote)}`} style={{fontStyle: 'italic'}}>"{quote}"</blockquote>
const makeCatchPhrase = compose(Quote, getCatchPhrase)
const makeBlathersPhrase = compose(Quote, getBlathersPhrase)

const FishWrapper = children => 
  <section id="fish">
    <Link to={'/fish'}>Back</Link>
    {children}
  </section>

// makeList is a list of functions that convert data -> Components in order
const makeList = [
  makeName, makeCatchPhrase, makeBlathersPhrase, 
  makeRarity, makeSize, makeLocation, 
  makePrice,
]

const Fish = compose(FishWrapper, mapFunctions(makeList))

export default Fish
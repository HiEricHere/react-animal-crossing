import React from 'react'
import { 
  prop, path, pathSatisfies, 
  map, split, join, compose, 
  toUpper, over, lensIndex, 
  equals, pick, ifElse,
  always } from 'ramda'

// ID
const fishId = prop('id')

// Name
const capFirst = compose(join(''), over(lensIndex(0), toUpper))
const capAllFirst = compose(join(' '), map(capFirst), split(' '))
const getName = compose(capAllFirst, path(['name', 'name-en']))

// Meta - availability
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
const location = path(['availability', 'location'])
const rarity = path(['availability', 'rarity'])

// Size
const fishSize = prop('shadow')

// Price
// Nook's Cranny
const fishPrice = prop('price')
// CJ
const fishPriceCJ = prop('price-cj')

// Description
// Catch
const fishCatchPhrase = prop('catch-phrase')
// Blathers
const fishBlathersPhrase = prop('museum-phrase')

const Fish = fish => 
  <li key={fishId(fish)}>
    <h3>{getName(fish)}</h3>
    <blockquote style={{fontStyle: 'italic'}}>"{fishCatchPhrase(fish)}"</blockquote>
    <blockquote style={{fontStyle: 'italic'}}>"{fishBlathersPhrase(fish)}"</blockquote>
    <p>Rarity: {rarity(fish)}</p>
    <p>Size: {fishSize(fish)}</p>
    <h4>Price:</h4>
    <ul>
      <li>Nook's Cranny: {fishPrice(fish)}</li>
      <li>CJ: {fishPriceCJ(fish)}</li>
    </ul>
    <h4>Where to find:</h4>
    <p>Location: {location(fish)}</p>
    <p>Hours: {timeAvailability(fish)}</p>
  </li>

export default Fish
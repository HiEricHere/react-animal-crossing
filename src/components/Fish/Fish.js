import React from 'react'
import { prop, path, map, split, join, tail, compose, toUpper, head } from 'ramda'

// const fishId = prop('id')
// const capFirst = compose(toUpper, head)
// const formatName = s => `${capFirst(s)}${tail(s)}`
// const capAllFirst = compose(join(' '), map(formatName), split(' '))
// const getNames = compose(capAllFirst, path(['name', 'name-en']))

const Fish = fish => 
  <li key={fish}>{fish}</li>

export default Fish
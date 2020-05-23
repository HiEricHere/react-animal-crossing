import { compose, over, lensIndex, toUpper, join, map, split } from 'ramda'

const capFirst = compose(join(''), over(lensIndex(0), toUpper))
export const formatTitle = compose(join(' '), map(capFirst), split(' '))

// mapFunctions inverses map. Whereas map applies one function to many elements of an array,
// mapFunctions applies one item of data to a list of functions.
const feedFunction = x => f => f(x)
export const mapFunctions = functionList => data => map(feedFunction(data), functionList)
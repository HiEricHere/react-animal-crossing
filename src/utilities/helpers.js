import { compose, over, lensIndex, toUpper, join, map, split, tap } from 'ramda'

export const peek = tap(console.log)

const capFirst = compose(join(''), over(lensIndex(0), toUpper))
export const formatTitle = compose(join(' '), map(capFirst), split(' '))

// mapFunctions inverses map. Whereas map applies one function to many elements of an array,
// mapFunctions applies the same data value to a list of functions to run on.
const feedFunction = x => f => f(x)
export const mapFunctions = functionList => data => map(feedFunction(data), functionList)
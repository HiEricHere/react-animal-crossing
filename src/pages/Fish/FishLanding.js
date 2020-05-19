import React from 'react'
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom'
import { lensPath, view, compose } from 'ramda'
import FishContextProvider from '../../contexts/FishContext'
import { Fish, FishList} from '../../components/Fish'

const lensFish = lensPath(['location', 'state'])
const lensName = lensPath(['name', 'name-en'])
const getData = xLens => view(compose(lensFish, xLens))
const getName = getData(lensName)
const FishTest = props => {
  return (
    <section>
      <Link to={'/fish'}>Back</Link>
      <div>FishTest: {getName(props)}</div>
    </section>
  )
}

const FishLanding = () => {
  const { path }= useRouteMatch()
  return (
    <>
      <FishContextProvider>
        <Switch>
          <Route exact path={path} component={FishList} />
          <Route path={`${path}/:fishName`} component={FishTest} />
        </Switch>
      </FishContextProvider>
    </>
  )
}

export default FishLanding
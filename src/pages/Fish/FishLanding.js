import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import FishContextProvider from '../../contexts/FishContext'
import { Fish, FishList} from '../../components/Fish'

const FishLanding = () => {
  const { path }= useRouteMatch()
  return (
    <>
      <FishContextProvider>
        <Switch>
          <Route exact path={path} component={FishList} />
          <Route path={`${path}/:fishName`} component={Fish} />
        </Switch>
      </FishContextProvider>
    </>
  )
}

export default FishLanding
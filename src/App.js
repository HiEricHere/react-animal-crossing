import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FishLanding from './pages/Fish/FishLanding'
import BugsLanding from './pages/Bugs/BugsLanding'
import VillagersLanding from './pages/Villagers/VillagersLanding'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/fish" component={FishLanding} />
          <Route path="/bugs" component={BugsLanding} />
          <Route path="/villagers" component={VillagersLanding} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

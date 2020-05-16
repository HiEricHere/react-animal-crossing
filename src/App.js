import React from 'react'
import FishContextProvider from './contexts/FishContext'
import FishList from './components/Fish'

function App() {
  return (
    <div className="App">
      <FishContextProvider>
        <FishList />
      </FishContextProvider>
    </div>
  );
}

export default App;

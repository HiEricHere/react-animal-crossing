import React from 'react'
import FishContextProvider from '../../contexts/FishContext'
import FishList from '../../components/Fish'

const FishLanding = () => 
  <>
    <FishContextProvider>
      <FishList />
    </FishContextProvider>
  </>

export default FishLanding
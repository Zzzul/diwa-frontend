import { useState } from 'react'
import './App.css'

import { Text } from "@chakra-ui/react"

import LandingSection from './components/LandingSection'

function App() {
  return (
    <div className="App">
      <LandingSection />

      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import './App.css'
import style from 'styled-components'
import { motion } from "framer-motion"
import Pokedex from './components/Pokedex'

const Spinner = style(motion.div)`
width: 50px;
height: 50px;
border: 4px solid black;
border-top: 4px solid #fff;
border-radius: 50%;
display: inline-block;
`;

const Container = style.div`
display: flex;
width: 100w;
align-items: center;
justify-content: center;
height: 100vh;
`;

function App() {
    const [carregando, setCarregando] = useState(true);

useEffect(() => {
  const tempo = setTimeout(() => {
    setCarregando(false);
  }, 5000)
  return () => clearTimeout(tempo)
}, [])

return (
  <Container>
    {carregando ?(
    <Spinner
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>

    </Spinner>
    ):(
      <Pokedex/>
    )}
  </Container>

)
}

export default App

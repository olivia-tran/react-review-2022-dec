import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import styled from '@emotion/styled'

const Button = styled.button`
background: #AA96DA;
color: white;
border-radius: 1rem;
display: inline-block;
font-size: 2rem;
margin: 1rem;
padding: 0.25rem 1rem;

`

const Container = styled.div`
background: #A8D8EA;
color: white;
text-align: center;
font-weight: bold;
&:hover {
  color: #AA96DA;
}



`
function App() {
  return <div>
    <Container>
     <h4>React Project OT</h4>
  <Button> Click me!</Button>
  </Container>
  </div>
}

export default App

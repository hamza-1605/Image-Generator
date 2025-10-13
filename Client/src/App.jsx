import styled, {ThemeProvider} from 'styled-components'
import {darkTheme} from './utils/Theme'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.css'

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${ ({theme}) => theme.bg };
  color:  ${ ({theme}) => theme.text_primary };
  overflow-x: hidden;
  overflow-y: hidden;
  transtion: all 0.6 ease;
`

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
`


function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Body>
          <Wrapper>
            <Router>
            <Navbar />
              <Routes>
                <Route path='/' element={ <Home /> } exact />
                <Route path='/post' element={ <CreatePost/> } exact />
              </Routes>
            </Router>
          </Wrapper>
        </Body>
      </ThemeProvider>
    </>
  )
}

export default App

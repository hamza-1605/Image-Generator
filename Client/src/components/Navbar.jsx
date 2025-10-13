import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useNavigate, useLocation} from 'react-router-dom'

const Container = styled.div`
    flex:1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    font-weight: 600;
    padding: 8px 20px
`

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split('/');
  return (
    <div>
        <Container>
            GEN AI
                {path[1] === 'post' 
                ? <Button onClick={ () => navigate('/') } text="Explore Posts" leftIcon="🌐" /> 
                :  <Button onClick={ () => navigate('/post') } text="Create a Post" leftIcon="+" /> }
        </Container>
    </div>
  )
}

export default Navbar

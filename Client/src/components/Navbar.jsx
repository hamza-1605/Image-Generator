import styled from 'styled-components'
import Button from './Button'
import { useNavigate, useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faPlus } from "@fortawesome/free-solid-svg-icons";

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
                ? <Button onClick={ () => navigate('/') } text="Explore Posts" leftIcon=<FontAwesomeIcon icon={faEarthAmericas}/>  />
                :  <Button onClick={ () => navigate('/post') } text="Create a Post" leftIcon=<FontAwesomeIcon icon={faPlus} /> /> }
        </Container>
    </div>
  )
}

export default Navbar

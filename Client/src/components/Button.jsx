import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress'

// const StyledButton = styled.button`
//     padding: 10px 25px;
//     height: max-content;
//     color: white;
//     background-color: ${({bgc}) => bgc || 'blue'};
//     border-radius: 15px;
//     border: none;
//     font-size: 16px;
//     font-weight: 600;
//     margin: 8px 5px;
//     cursor: pointer;
//     transition: 0.3s ease;

//     &:hover{
//         background-color: darkblue;
//     }
// `

const CoolSpan = styled.span`
    font-weight: 500;
`

const Button = ( {leftIcon, text, onClick, isDisabled, isLoading} ) => {

  return (
    <button 
      className='bttn'
      onClick={onClick}
      disabled={isDisabled}
      
    >
      <CoolSpan>
      { isLoading ? 
        <CircularProgress size={16} color='inherit' />
        : leftIcon 
      }
      </CoolSpan>&nbsp;&nbsp;&nbsp;{text}
    </button>
  )
}

export default Button

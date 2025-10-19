import React from 'react'
import styled from 'styled-components'
import {SearchOutlined} from '@mui/icons-material';

const SearchBarContainer = styled.div`
    max-width: 550px;
    width: 90%;
    margin: 30px 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 8px;
    border: 2px solid navy;
    border-radius: 10px;
`

const SearchBar = ({ search, setSearch }) => {
  return (
    <SearchBarContainer>
        
        <SearchOutlined />
        
        <input type="text" placeholder='Search with prompt or name . . .' style={{
            backgroundColor: "transparent",
            border: 'none',
            outline: 'none',
            color: 'whitesmoke',
            width: '100%',
            fontSize: '15px'
        }}
        value={search}
        onChange={ (e) => setSearch(e.target.value) }
        />
    
    </SearchBarContainer>
  )
}

export default SearchBar

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import ImageCard from '../components/ImageCard'
import {getPosts} from '../api/api.js'
import CircularProgress from '@mui/material/CircularProgress'

const Container = styled.div`
    height: 100%;
    overflow-y: scroll;
    padding: 10px 30px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Headline = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    font-size: 22px;
    text-align: center;

    @media(max-width: 600px){
        font-size: 18px;
    }
`
const CoolSpan = styled.span`
    font-size: 25px;
    font-weight: 600;
    color: ${({theme}) => theme.primary};
    
    @media(max-width: 600px){
        font-size: 21px;
    }
`
const Wrapper = styled.div`
    width: 100%;
    max-width: 1210px;
    padding: 20px 0;
    display: flex;
    justify-content: center;
`
const CardWrapper = styled.div`
    display: grid;
    gap: 20px;
    @media (min-width: 1100px){
        grid-template-columns: repeat(4, 1fr) ;
    }
    @media (min-width: 640px) and (max-width: 1099px){
        grid-template-columns: repeat(3, 1fr) ;
    }
    @media (max-width: 639px){
        grid-template-columns: repeat(2, 1fr) ;
    }

`

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);

    
    const loadPosts = async () => {
        try {
            setLoading(true);
            const response = await getPosts();
            setPosts( response.data.data );
            setFilteredPosts( response.data.data );
            setLoading(false);       
        } 
        catch (error) {
            setError(error);    
            setLoading(false);       
        }
    }


    useEffect(() => {
      loadPosts();
    }, [])
    

    // search useEffect
    useEffect(() => {
        if (!search) {
            setFilteredPosts( posts );
            return;
        }

        const searchFilteredPosts = posts.filter( (post) => {
            const promptMatch = post?.prompt?.toLowerCase().includes( search.toString().toLowerCase() ) ;
            const authorMatch = post?.author?.toLowerCase().includes( search.toString().toLowerCase() ) ;

            return promptMatch || authorMatch ;
        })
        
        if (search) {
            setFilteredPosts( searchFilteredPosts );
        }
    }, [posts, search])


  return (
    <Container>
        <Headline>
            Create or Explore the popular posts in the community!
            <CoolSpan>🤖 Generated with AI 🤖</CoolSpan>
        </Headline>
        <SearchBar search={search} setSearch={setSearch} />

        <Wrapper>
            <CardWrapper> 
                { error && <div style={{color: 'red'}}>{error.message}</div> }
                {
                loading 
                ?
                  <CircularProgress size={50}/>
                :   
                    filteredPosts.length!==0 
                    ?   
                        filteredPosts.slice()
                        .reverse()
                        .map( (post) => 
                                <ImageCard item={post} />
                        )
                    : <div>No posts found</div>
                }
            </CardWrapper>
        </Wrapper>
    </Container>
  )
}

export default Home

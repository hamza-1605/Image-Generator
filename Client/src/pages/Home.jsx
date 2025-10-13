import React from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import ImageCard from '../components/ImageCard'

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
    max-width: 1410px;
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
    const item = {
        photo: "https://images.wallpaperscraft.com/image/single/silhouettes_love_tree_128864_320x240.jpg",
        author: "Hamza",
        prompt: "Night sky with tree"
    }
  return (
    <Container>
        <Headline>
            Explore the popular posts in the community!
            <CoolSpan>🤖 Generated with AI 🤖</CoolSpan>
        </Headline>
        <SearchBar />

        <Wrapper>
            <CardWrapper>
                <ImageCard item={item}/>
                <ImageCard item={item}/>
                <ImageCard item={item}/>
                <ImageCard item={item}/>
                <ImageCard item={item}/>
                <ImageCard item={item}/>
                <ImageCard item={item}/>
                <ImageCard item={item}/>
            </CardWrapper>
        </Wrapper>
    </Container>
  )
}

export default Home

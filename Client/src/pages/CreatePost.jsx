import { useState } from 'react'
import styled from 'styled-components'
import GenerateImageForm from '../components/GenerateImageForm'
import GeneratedImage from '../components/GeneratedImage'

const Container = styled.div`
    height: 100%;
    overflow-y: scroll;
    padding: 10px 30px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Wrapper = styled.div`
    flex: 1;
    width: 100%;
    max-width: 1110px;
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;

    @media (max-width: 800px){
    flex-direction: column;
    }
`

const CreatePost = () => {
  const [generatedImageLoading, setGeneratedImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);

  const [post, setPost] = useState({
    author: "",
    photo: "",
    prompt: "",
  });

  return (
    <Container>
      <Wrapper>
        <GenerateImageForm 
          post={post} 
          setPost={setPost} 
          generatedImageLoading={generatedImageLoading} 
          setGeneratedImageLoading={setGeneratedImageLoading} 
          createPostLoading={createPostLoading}
          setCreatePostLoading={setCreatePostLoading} 
        />
        <GeneratedImage src={post?.photo} loading={generatedImageLoading}/>
      </Wrapper>
    </Container>
  )
}

export default CreatePost

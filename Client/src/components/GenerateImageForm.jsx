import React from 'react'
import InputBox from './InputBox'
import Button from './Button'
import styled from 'styled-components'
import {AutoAwesome} from '@mui/icons-material'

const Form = styled.div`
    flex: 1;
    padding: 5px 15px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
`

const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
`

const Title = styled.div`
    font-size: 26px;
    font-weight: 600;
`

const Desc = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: lightgray;
`

const Body = styled.div`
    // display: flex;
    // flex-direction: column;
    font-size: 15px
`

const Actions = styled.div`
    margin-top: -33px;
    flex: 1;
    display: flex;
    justify-content: center;
`

const GenerateImageForm = ({
    post, 
    setPost,
    generatedImageLoading,
    setGeneratedImageLoading,
    createPostLoading,
    setCreatePostLoading,
}) => {

    const handleOnChange = (e) => {
        setPost({...post, [e.target.name] : e.target.value});
    }
    
    const generateImageFunction = () => {
        setGeneratedImageLoading(true);
    }

    const createPostFunction = () => {

        setPost({
            author: "",
            photo: "",
            prompt: "",
        });
    }

  return (
    <Form>
        <Top>
            <Title>Generate Image with Prompt</Title>
            <Desc>Enter a prompt to generate any kind of image you like.</Desc>
        </Top>
        <Body>
            <InputBox 
                type="text"
                text="Author"
                placeholder="Enter your Name"
                name="author"
                value={post.author}
                onChange={handleOnChange}
            />
            <InputBox 
                type="textarea"
                text="Title"
                placeholder="Enter a prompt to generate an image. . ."
                name="prompt"
                value={post.prompt}
                onChange={handleOnChange}
            />
            <p style={{
                fontSize: 11,
                marginTop: '-15px',
                marginBottom: '20px',
                color: 'whitesmoke',
            }}>
                *You can post AI generated image to the community.*
            </p>
        </Body>
        <Actions>
            <Button 
                text="Generate Image" 
                leftIcon="✨"
                isDisabled={ 
                    post?.prompt.trim() === "" 
                }
                isLoading={generatedImageLoading}
                onClick={ () => {
                    generateImageFunction();
                }}
            />
            <Button 
                text="Post Image" 
                leftIcon="🖊"
                isDisabled={ 
                    post.prompt.trim() === "" || 
                    post.author.trim() === "" ||
                    post.photo.trim() === ""
                }
                isLoading={createPostLoading}
                onClick={ () => {
                    createPostFunction();
                }}
            />
        </Actions>
    </Form>
  )
}

export default GenerateImageForm

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from './Button'
import styled from 'styled-components'
import InputBox from './InputBox'

import { createPost, generateImage } from '../api/api.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

const Form = styled.div`
    flex: 1;
    padding: 0px 15px 25px 15px;
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
    const navigate = useNavigate();
    const [error, setError] = useState(null);


    const handleOnChange = (e) => {
        setPost({...post, [e.target.name] : e.target.value});
    }
    

    const generateImageFunction = async () => {  
        try {
            setGeneratedImageLoading(true);
            
            const response = await generateImage({ prompt: post.prompt });
            console.log(response);
            setPost({
                ...post,
                photo: response?.data?.image
            });
            
            setGeneratedImageLoading(false);
            setError(null);
        } 
        catch (error) {
            console.log("***************ERROR while generating image by frontend*************" + error);
            setError(error);
            setGeneratedImageLoading(false);
        }
    }


    const createPostFunction = async () => {
        try {
            setCreatePostLoading(true);
            
            await createPost( post );
            
            setCreatePostLoading(false);
            setError(null);
            navigate('/');
            
            setPost({
                author: "",
                photo: "",
                prompt: "",
            });
        } 
        catch (error) {
            console.log("***************ERROR while creating post by frontend*************" + error);
            setError(error);
            setCreatePostLoading(false);
        }
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
                max={18}
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
                { error && <div style={{color: 'red'}}>{error.message}</div>}
            </p>
        </Body>
        <Actions>
            <Button 
                text="Generate Image" 
                leftIcon=<FontAwesomeIcon icon={faWandMagicSparkles} />
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
                leftIcon= < FontAwesomeIcon icon={faPenToSquare} />
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

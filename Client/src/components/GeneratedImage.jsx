import styled from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress'
// import Button from '../components/Button'

const Container = styled.div`
  flex: 1;
  min-height: 300px;
  margin: 20px;
  padding: 16px;
  border: 2px dashed maroon;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: gray;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: black;
  border-radius: 20px
`
const InsideText = styled.p`
  font-size: 14px;
  color: teal;
  text-align: center;
`

const GeneratedImage = ({src, loading}) => {
  return (
    <Container>
      {
        loading ? 
          <>
            <CircularProgress size={30} color='inherit' />
            <InsideText> Generating your Image. . .</InsideText>
            <InsideText> Please Wait </InsideText>
            {/* <Button 
              text="Stop" 
              leftIcon="🛑"
              /> */}
          </> 
        : <>
            {src ? <Image src={src} /> : <InsideText>Write a prompt to generate an image.</InsideText>}
          </> 
      }
    </Container>
  )
}

export default GeneratedImage

import Avatar from '@mui/material/Avatar'
import DownloadIcon from '@mui/icons-material/Download';
import {LazyLoadImage} from 'react-lazy-load-image-component'
import styled from 'styled-components'
import FileSaver from 'file-saver'


const Card = styled.div`
    position: relative;
    display: flex;
    border-radius: 20px;
    box-shadow: 1px 1px 40px 8px black;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover{
        scale: 1.04;
    }

    &:nth-child(7n + 1){
        grid-column: auto/span 2;
        grid-row: auto/span 2;
    }
`
const HoverOverlay = styled.div`
    opacity: 0;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: end;
    backdrop-filter: blur(2px);
    transition: all 0.3s ease;

    ${Card}:hover &{
        opacity: 1;
    }
    
    @media (max-width: 700px){
        padding: 8px;
    }
`
const Prompt = styled.div`
    font-weight: 400;
    font-size: 15px;
    color: white; 
`
const AuthDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Author = styled.div`
    font-weight: 600;
    font-size: 15px;
    color: white; 
    display: flex;
    gap: 8px;
    align-items: center;
    
    @media (max-width: 700px){
        font-size: 13px;
        font-weight: 500;
    }
`

const ImageCard = ( props ) => {
    const {item} = props ;
  return (
    <Card>
        <LazyLoadImage
            style={{
                borderRadius: "20px"
            }} 
            width='100%' 
            src={item?.photo} 
        />      
        <HoverOverlay>
            <Prompt>{item?.prompt}</Prompt>
            <AuthDiv>
                <Author>
                    <Avatar sx={{
                        bgcolor: 'darkblue',
                        width: { xs: 30, sm: 40, md: 50 },
                        height: { xs: 30, sm: 40, md: 50 },
                        fontSize: { xs: 13, sm: 16, md: 20}
                    }}>{item?.author[0]}</Avatar>
                    
                    {item?.author}
                </Author>
                <DownloadIcon sx={{
                    bgcolor: 'maroon',
                    borderRadius: '50%' ,
                    padding: '5px',
                    width: 30,
                    height: 30,
                }} onClick={()=> FileSaver.saveAs(item?.photo ,'AI-Image.jpg')}/>
            </AuthDiv>
        </HoverOverlay>
    </Card>
  )
}

export default ImageCard

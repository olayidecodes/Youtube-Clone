import React from 'react'
import styled from 'styled-components'
import YoutubeChannel from "../assets/Youtube.png"
import Card from '../components/Card'
import Comments from '../components/Comments'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';

const Container = styled.div`
    display: flex;
    gap: 24px;
`

const Content = styled.div`
    flex: 5;
`

const VideoWrapper = styled.div`

`

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({theme}) => theme.text}
`

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Info = styled.span`
    color: ${({theme}) => theme.textSoft};
`

const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({theme}) => theme.text}
`

const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
`

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%
`

const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.text}
`

const ChannelName = styled.span`
    font-weight: 500;
`

const ChannelCounter = styled.span`
    margin: 5px 0 20px 0;
    color: ${({theme}) => theme.textSoft};
    font-size: 12px;
`

const Description = styled.p`
    font-size: 14px;
`

const Subscribe = styled.button`
    background-color: #cc1a00;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`

const Recommendation = styled.div`
    flex: 2;
`

const Video = () => {
  return (
    <Container>
        <Content>
            <VideoWrapper>
                <iframe
                width="100%"
                height="480"
                src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                title="Youtube Video Player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                ></iframe>
            </VideoWrapper>
            <Title>Test Video</Title>
            <Details>
                <Info>7,948,154 views . Jun 22, 2022</Info>
                <Buttons>
                    <Button><ThumbUpOutlinedIcon/> 123</Button>
                    <Button><ThumbDownOutlinedIcon/> Dislike</Button>
                    <Button><ReplyOutlinedIcon /> Share</Button>
                    <Button><PlaylistAddOutlinedIcon /> Save</Button>
                </Buttons>
            </Details>
            <Hr />
            <Channel>
                <ChannelInfo>
                    <Image src= "https://www.freeiconspng.com/uploads/coca-cola-logo-png-7.png" width="350" alt="Hd Background Png Coca Cola Logo Transparent" />
                    <ChannelDetail>
                        <ChannelName>Microsoft</ChannelName>
                        <ChannelCounter>122K subscribers</ChannelCounter>
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod expedita hic voluptatem, quidem at praesentium illum delectus repellat aperiam id impedit nihil est! Eum maxime corporis aut sit nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi ipsam, omnis porro deleniti ut nesciunt eos cum aperiam..</Description>
                    </ChannelDetail>
                </ChannelInfo>
                <Subscribe>SUBSCRIBE</Subscribe>
            </Channel>
            <Hr />
            <Comments />
        </Content>
        <Recommendation>
            <Card type="sm"/>
            <Card type="sm"/>
            <Card type="sm"/>
            <Card type="sm"/>
            <Card type="sm"/>
            <Card type="sm"/>
            <Card type="sm"/>
            <Card type="sm"/>
            <Card type="sm"/>
            <Card type="sm"/>
        </Recommendation>
    </Container>
  )
}

export default Video
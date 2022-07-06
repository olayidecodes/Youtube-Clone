import React from 'react'
import styled from 'styled-components'
import img from '../assets/img.png'
import YoutubeChannel from "../assets/Youtube.png"
import {Link} from "react-router-dom"

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`
const Image = styled.img`
  width: 100%;
  height: ${(props) => props.type === "sm" ? "120px" : "202px"};;
  background-color: #999; 
  flex: 1;
` 

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  align-items: ${(props) => props.type == "sm" ? "none" : "center"};
  flex 1;
`
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: white;
  display: ${(props) => props.type == "sm" && "none"};
`
const Texts = styled.div`
  
`
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 3px;
  color: ${({theme}) => theme.text};
`
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({theme}) => theme.textSoft};
  margin: 5px 0px;
`
const Info = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.textSoft};
`

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration: "none"}}>
      <Container type={type}>
        <Image type={type} src={img}/>
        <Details type={type}>
          <ChannelImage src= "https://www.freeiconspng.com/uploads/coca-cola-logo-png-7.png" width="350" alt="Hd Background Png Coca Cola Logo Transparent" type={type}/>
          <Texts>
            <Title>Text Video</Title>
            <ChannelName>Microsoft</ChannelName>
            <Info>232,000 views ° 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )  
}

export default Card
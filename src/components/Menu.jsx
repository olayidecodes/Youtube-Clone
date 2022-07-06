import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const Container = styled.div`
    flex: 1;
    background-color: ${({theme}) => theme.bgLighter};
    height: 100vh;
    color: ${({theme}) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
    overflow: auto;
` 

const Wrapper = styled.div`
    padding: 18px 20px;
` 

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
`

const Img = styled.img`
    width: 45px;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 5px 0px;

    &:hover{
        background-color: ${({theme}) => theme.soft};
    }
`

const Hr = styled.hr`
    margin: 11.5px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
`

const Login = styled.div``
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`
const Title = styled.h2`
    font-size: 10px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 10px;
`

const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
            <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                <Logo>
                    <Img src = "https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png" width="350" alt="Hd Youtube Logo Png Transparent Background" />
                    Youtube
                </Logo>
            </Link>
            <Item>
                <HomeIcon />
                Home
            </Item>
            <Item>
                <ExploreOutlinedIcon />
                Explore
            </Item>
            <Item>
                <SubscriptionsOutlinedIcon />
                Subscriptions
            </Item>
            <Hr />
            <Item>
                <VideoLibraryOutlinedIcon />
                Library
            </Item>
            <Item>
                <HistoryOutlinedIcon />
                History
            </Item>
            <Hr />
            <Login>
                Sign in to like videos, comment, and subscribe.
                <Link to="signin" style={{textDecoration: "none"}}>
                    <Button><AccountCircleOutlinedIcon />SIGN IN</Button>
                </Link>
            </Login>
            <Hr />
            <Title>
                BEST OF YOUTUBE
            </Title>
            <Item>
                <LibraryMusicOutlinedIcon />
                Music
            </Item>
            <Item>
                <SportsBasketballOutlinedIcon />
                Sports
            </Item>
            <Item>
                <SportsEsportsOutlinedIcon />
                Gaming
            </Item>
            <Item>
                <MovieOutlinedIcon />
                Movies
            </Item>
            <Item>
                <NewspaperOutlinedIcon />
                News
            </Item>
            <Item>
                <LiveTvOutlinedIcon />
                Live
            </Item>
            <Hr />
            <Item>
                <SettingsOutlinedIcon />
                Settings
            </Item>
            <Item>
                <FlagOutlinedIcon />
                Report
            </Item>
            <Item>
                <HelpOutlineOutlinedIcon />
                Help
            </Item>
            <Item onClick={() => setDarkMode(!darkMode)}>
                <NightlightOutlinedIcon />
                {darkMode ? "Light" : "Dark"} Mode
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu
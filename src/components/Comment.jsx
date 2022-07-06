import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme}) => theme.text}
`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme})  => theme.textSoft};
    margin-left: 5px;
`

const Text = styled.span`
    font-size: 14px;
`

const Comment = () => {
  return (
    <Container>
        <Avatar src= "https://www.freeiconspng.com/uploads/coca-cola-logo-png-7.png" width="350" alt="Hd Background Png Coca Cola Logo Transparent" />
        <Details>
            <Name>
                Victoria Matthews <Date>2 days ago</Date>
            </Name>
            <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus impedit esse eum ipsa quas aperiam voluptates qui eaque, aspernatur cum nostrum quisquam sit animi, est doloribus recusandae minus. Ducimus.
            </Text>
        </Details>

    </Container>
  )
}

export default Comment
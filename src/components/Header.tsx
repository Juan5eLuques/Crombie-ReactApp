import React from 'react'
import logoCrombie from '../assets/image-crombie.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const Header = () => (
    <Container>
        <Link to={'/'}>
            <LogoTitle>
                <Logo className='logo' src={logoCrombie}></Logo>
                <h4>Crombie</h4>
            </LogoTitle>
        </Link>
    </Container>
)


const Container = styled.div`

 display: flex;
  flex: row;
  widows: 100vw;
  align-items: center;
  background-color: #000;

`

const LogoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Logo = styled.img`
  height: 52px;
  width: 52px;
`
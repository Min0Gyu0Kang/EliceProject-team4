import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 35px;
    font-size: 9pt;
`

const Content = styled.div`
    color: black;
    opacity: 0.5;
`

const Footer = () => {
    return (
        <FooterContainer>
            <Content>© 2024 URBANOASIS ALL RIGHTS RESERVED</Content>
        </FooterContainer>
    )
}

export default Footer

/**
File Name : Footer
Description : 하단 푸터
Author : 임지영

History
Date        Author   Status    Description
2024.06.11  임지영   Created
2024.06.21  강민규   Modified  Footer at bottom relative
*/

import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
    height: 40px;
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

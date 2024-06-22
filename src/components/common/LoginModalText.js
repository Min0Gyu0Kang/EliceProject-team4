/**
File Name : LoginModalText
Description : 로그인 알림 문구 컴포넌트
Author : 임지영

History
Date        Author   Status    Description
2024.06.14  임지영   Created
*/

import React from 'react'
import styled from 'styled-components'
import '../../assets/fonts/font.css'

const LoginText = styled.div`
    font-family: 'gmarket Medium';
    font-size: 17pt;
`

const LoginModalText = ({text}) => {
    return (
        <div style={{marginTop: '30px'}}>
            <LoginText>{text} 작성하려면 로그인하세요</LoginText>
        </div>
    )
}

export default LoginModalText

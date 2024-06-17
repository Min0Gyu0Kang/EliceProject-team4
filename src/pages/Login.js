/**
File Name : Login
Description : 로그인 페이지
Author : 임지영

History
Date        Author   Status    Description
2024.06.11  임지영    Created
2024.06.13  임지영    Modified   폰트 적용
2024.06.17  임지영    Modified   SignUp과 겹치는 스타일 InputStyles.js로 분리
*/

import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import '../assets/fonts/font.css'
import {BrowserRouter as Router, Link, useLocation} from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Email from '../assets/images/email.svg'
import Password from '../assets/images/password.svg'
import EyeIcon from '../assets/images/eye.svg' // 눈 아이콘 추가
import EyeOffIcon from '../assets/images/eye-off.svg' // 눈 감김 아이콘 추가
import * as InputStyles from '../components/inputs/InputStyles'

const LoginContent = styled(InputStyles.LoginContent)`
    height: 550px;
`

const InputField = styled(InputStyles.InputField)`
    gap: 26px;
    margin: 30px;
`

const PasswordContainer = styled.div`
    position: relative;
    width: 97%;
`

const PasswordInput = styled(InputStyles.PasswordInput)`
    left: -1.1%; // 오른쪽으로 치우침 해결
`

const Login = () => {
    // 비밀번호 보일지 말지
    // 아이콘 클릭시
    const [showPassword, setShowPassword] = useState(false)

    const passwordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword)
    }

    return (
        <div>
            <Header />
            <InputStyles.LoginContainer>
                <LoginContent>
                    <InputStyles.Logo>도시의 오아시스</InputStyles.Logo>
                    <InputStyles.DividingLine />
                    <InputField method="POST" action="API주소">
                        <InputStyles.EmailInput
                            type="email"
                            placeholder="이메일을 입력하세요"
                            required
                        />
                        <PasswordContainer>
                            <PasswordInput
                                type={showPassword ? 'text' : 'password'}
                                placeholder="비밀번호를 입력하세요"
                                required
                            />
                            <InputStyles.ToggleButton
                                onClick={passwordVisibility}
                            >
                                <img
                                    src={showPassword ? EyeOffIcon : EyeIcon}
                                    alt="비밀번호 숨김/보임"
                                />
                            </InputStyles.ToggleButton>
                        </PasswordContainer>
                        <InputStyles.LoginButton type="submit" value="로그인" />
                    </InputField>
                    <InputStyles.DividingLine />
                    <InputStyles.SignUpConatiner>
                        <InputStyles.SignUpText>
                            아직 계정이 없으신가요?
                            <br />
                            계정을 만들고 더 많은 기능을 사용해 보세요!
                        </InputStyles.SignUpText>
                        <InputStyles.SignUpButton to="/signUp">
                            회원가입
                        </InputStyles.SignUpButton>
                    </InputStyles.SignUpConatiner>
                </LoginContent>
            </InputStyles.LoginContainer>
            <Footer />
        </div>
    )
}

export default Login

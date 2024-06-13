/**
File Name : Login
Description : 로그인 페이지
Author : 임지영

History
Date        Author   Status    Description
2024.06.11  임지영    Created
*/

import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import {BrowserRouter as Router, Link, useLocation} from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Email from '../assets/images/email.svg'
import Password from '../assets/images/password.svg'
import EyeIcon from '../assets/images/eye.svg' // 눈 아이콘 추가
import EyeOffIcon from '../assets/images/eye-off.svg' // 눈 감김 아이콘 추가

const LoginContainer = styled.div`
    margin-top: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f3eb;
    width: 750px;
    height: 550px;
    border: none;
    border-radius: 31px;
    padding: 15px 50px;
`

const Logo = styled.div`
    letter-spacing: -0.05em;
    font-size: 37pt;
    color: #30cb6e;
    font-weight: 900;
    text-shadow:
        -0.5px 0px #30cb6e,
        0px 0.5px #30cb6e,
        0.5px 0px #30cb6e,
        0px -0.5px #30cb6e;
    padding: 20px 0;
    margin-bottom: 10px;
`

const DividingLine = styled.hr`
    width: 100%;
    border: 0.5px solid #828282;
    transform: matrix(1, 0, 0, 1, 0, 0);
`

const InputField = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 26px;
    margin: 30px;
`

const inputStyles = css`
    width: 90%;
    height: 35px;
    padding: 10px 10px 10px 55px;
    border: 1px solid #957556;
    border-radius: 22px;
    font-size: 16px;
    background-repeat: no-repeat;
    background-position: 15px center;
    background-size: 30px 30px;
`

const EmailInput = styled.input`
    ${inputStyles}
    background-image: url(${Email});
`

const PasswordContainer = styled.div`
    position: relative;
    width: 97%;
`

const PasswordInput = styled.input`
    ${inputStyles}
    background-image: url(${Password});
    padding-right: 30px; // 아이콘 공간 확보
    position: relative;
    left: -1.1%;
    z-index: 1;
`

const ToggleButton = styled.button`
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    z-index: 2;
`

const LoginButton = styled.input`
    background-color: #30cb6e;
    color: white;
    font-weight: bold;
    border-radius: 22px;
    border: none;
    font-size: 16pt;
    width: 260px;
    height: 45px;

    &:hover {
        background-color: #2ab361;
        cursor: pointer;
    }
`
const SignUpConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    font-weight: bold;
`

const SignUpText = styled.div`
    text-align: center;
    margin: 12px;
    color: #737373;
    font-size: 10pt;
    line-height: 20px;
`

const SignUpButton = styled(Link)`
    color: #4f6f52;
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
            <LoginContainer>
                <LoginContent>
                    <Logo>도시의 오아시스</Logo>
                    <DividingLine />
                    <InputField method="POST" action="API주소">
                        <EmailInput
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
                            <ToggleButton onClick={passwordVisibility}>
                                <img
                                    src={showPassword ? EyeOffIcon : EyeIcon}
                                    alt="비밀번호 숨김/보임"
                                />
                            </ToggleButton>
                        </PasswordContainer>
                        <LoginButton type="submit" value="로그인" />
                    </InputField>
                    <DividingLine />
                    <SignUpConatiner>
                        <SignUpText>
                            아직 계정이 없으신가요?
                            <br />
                            계정을 만들고 더 많은 기능을 사용해 보세요!
                        </SignUpText>
                        <SignUpButton to="/signUp">회원가입</SignUpButton>
                    </SignUpConatiner>
                </LoginContent>
            </LoginContainer>
            <Footer />
        </div>
    )
}

export default Login

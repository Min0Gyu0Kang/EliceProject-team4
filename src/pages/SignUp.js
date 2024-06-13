/**
File Name : SignUp
Description : 회원가입 페이지
Author : 임지영

History
Date        Author   Status    Description
2024.06.11  임지영    Created
2024.06.13  임지영    Modified   비밀번호 입력칸 오른쪽 치우침 해결
2024.06.13  임지영    Modified   폰트 적용
*/

import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import '../assets/font/font.css'
import {BrowserRouter as Router, Link, useLocation} from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import NickName from '../assets/images/nickname.svg'
import Email from '../assets/images/email.svg'
import Password from '../assets/images/password.svg'
import EyeIcon from '../assets/images/eye.svg' // 눈 아이콘 추가
import EyeOffIcon from '../assets/images/eye-off.svg' // 눈 감김 아이콘 추가

const LoginContainer = styled.div`
    font-family: 'gmarket Medium';
    margin-top: 40px;
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
    height: 640px;
    border: none;
    border-radius: 31px;
    padding: 15px 50px;
`

const Logo = styled.div`
    font-size: 37pt;
    color: #30cb6e;
    font-weight: 900;
    text-shadow:
        -0.5px 0px #30cb6e,
        0px 0.5px #30cb6e,
        0.5px 0px #30cb6e,
        0px -0.5px #30cb6e;
    padding-top: 10px;
    padding-bottom: 20px;
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
    gap: 12px;
    margin: 20px;
`

const inputStyles = css`
    width: 90%;
    height: 35px; // 높이 통일
    padding: 10px 10px 10px 55px;
    border: 1px solid #957556;
    border-radius: 22px;
    font-size: 16px;
    background-repeat: no-repeat;
    background-position: 15px center;
    background-size: 30px 30px;

    &::placeholder {
        font-family: 'gmarket Medium';
        font-size: 11pt;
        color: #979494;
    }
`

const NickNameInput = styled.input`
    ${inputStyles}
    background-image: url(${NickName});
`

const EmailInput = styled.input`
    ${inputStyles}
    background-image: url(${Email});
`

const PasswordContainer = styled.div`
    position: relative;
    width: 96.9%;
`

const PasswordInput = styled.input`
    ${inputStyles}
    background-image: url(${Password});
    padding-right: 30px; // 아이콘 공간 확보
    position: relative;
    left: -1%; // 오른쪽으로 치우침 해결
    z-index: 1;
`

const PasswordConfirmInput = styled.input`
    ${inputStyles}
    background-image: url(${Password});
    padding-right: 30px; // 아이콘 공간 확보
    position: relative;
    left: -1%; // 오른쪽으로 치우침 해결
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
    margin-top: 15px;
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
    font-weight: 400;
    text-align: center;
    margin: 12px;
    color: #737373;
    font-size: 10pt;
    line-height: 20px;
`

const SignUpButton = styled(Link)`
    color: #4f6f52;
`

const ErrorMsg = styled.p`
    color: red;
    padding-top: 10px;
    margin: 0;
`

const SignUp = () => {
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handlePasswordConfirmChange = e => {
        setPasswordConfirm(e.target.value)
    }

    const passwordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const passwordConfirmVisibility = () => {
        setShowPasswordConfirm(!showPasswordConfirm)
    }

    const handleSubmit = e => {
        e.preventDefault() // 기본 폼 제출을 막음
        if (password !== passwordConfirm) {
            setErrorMessage('비밀번호가 일치하지 않습니다. 다시 입력해주세요.')
        } else {
            setErrorMessage('')
            // 여기에서 폼을 서버로 제출
            e.target.submit() // 폼 제출을 수동으로 호출
        }
    }

    return (
        <div>
            <Header />
            <LoginContainer>
                <LoginContent>
                    <Logo>회원가입</Logo>
                    <DividingLine />
                    <InputField
                        method="POST"
                        action="API주소"
                        onSubmit={handleSubmit}
                    >
                        <NickNameInput
                            type="text"
                            placeholder="닉네임을 입력하세요"
                            required
                        />
                        <EmailInput
                            type="email"
                            placeholder="가입할 이메일을 입력하세요"
                            required
                        />
                        <PasswordContainer>
                            <PasswordInput
                                type={showPassword ? 'text' : 'password'}
                                placeholder="비밀번호를 입력하세요 (특수문자 포함 8자리 이상)"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            <ToggleButton onClick={passwordVisibility}>
                                <img
                                    src={showPassword ? EyeOffIcon : EyeIcon}
                                    alt="비밀번호 숨김/보임"
                                />
                            </ToggleButton>
                        </PasswordContainer>
                        <PasswordContainer>
                            <PasswordConfirmInput
                                type={showPasswordConfirm ? 'text' : 'password'}
                                placeholder="입력한 비밀번호를 확인합니다"
                                value={passwordConfirm}
                                onChange={handlePasswordConfirmChange}
                                required
                            />
                            <ToggleButton onClick={passwordConfirmVisibility}>
                                <img
                                    src={
                                        showPasswordConfirm
                                            ? EyeOffIcon
                                            : EyeIcon
                                    }
                                    alt="비밀번호 숨김/보임"
                                />
                            </ToggleButton>
                        </PasswordContainer>
                        {errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}
                        <LoginButton type="submit" value="회원가입" />
                    </InputField>
                    <DividingLine />
                    <SignUpConatiner>
                        <SignUpText>이미 계정이 있으신가요?</SignUpText>
                        <SignUpButton to="/login">로그인</SignUpButton>
                    </SignUpConatiner>
                </LoginContent>
            </LoginContainer>
            <Footer />
        </div>
    )
}

export default SignUp

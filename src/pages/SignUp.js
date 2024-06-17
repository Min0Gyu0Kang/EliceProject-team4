/**
File Name : SignUp
Description : 회원가입 페이지
Author : 임지영

History
Date        Author   Status    Description
2024.06.11  임지영    Created
2024.06.13  임지영    Modified   비밀번호 입력칸 오른쪽 치우침 해결
2024.06.13  임지영    Modified   폰트 적용
2024.06.17  임지영    Modified   Login과 겹치는 스타일 InputStyles.js로 분리
*/

import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import '../assets/fonts/font.css'
import {BrowserRouter as Router, Link, useLocation} from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import NickName from '../assets/images/nickname.svg'
import Email from '../assets/images/email.svg'
import Password from '../assets/images/password.svg'
import EyeIcon from '../assets/images/eye.svg' // 눈 아이콘 추가
import EyeOffIcon from '../assets/images/eye-off.svg' // 눈 감김 아이콘 추가
import * as InputStyles from '../components/inputs/InputStyles'

const LoginContent = styled(InputStyles.LoginContent)`
    height: 640px;
`

const InputField = styled(InputStyles.InputField)`
    gap: 12px;
    margin: 20px;
`

const NickNameInput = styled.input`
    ${InputStyles.inputStyles}
    background-image: url(${NickName});
`

const PasswordContainer = styled.div`
    position: relative;
    width: 96.9%;
`

const PasswordInput = styled(InputStyles.PasswordInput)`
    left: -1%; // 오른쪽으로 치우침 해결
`

const PasswordConfirmInput = styled.input`
    ${InputStyles.inputStyles}
    background-image: url(${Password});
    padding-right: 30px; // 아이콘 공간 확보
    position: relative;
    left: -1%; // 오른쪽으로 치우침 해결
    z-index: 1;
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
            <InputStyles.LoginContainer>
                <LoginContent>
                    <InputStyles.Logo>회원가입</InputStyles.Logo>
                    <InputStyles.DividingLine />
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
                        <InputStyles.EmailInput
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
                            <InputStyles.ToggleButton
                                onClick={passwordVisibility}
                            >
                                <img
                                    src={showPassword ? EyeOffIcon : EyeIcon}
                                    alt="비밀번호 숨김/보임"
                                />
                            </InputStyles.ToggleButton>
                        </PasswordContainer>
                        <PasswordContainer>
                            <PasswordConfirmInput
                                type={showPasswordConfirm ? 'text' : 'password'}
                                placeholder="입력한 비밀번호를 확인합니다"
                                value={passwordConfirm}
                                onChange={handlePasswordConfirmChange}
                                required
                            />
                            <InputStyles.ToggleButton
                                onClick={passwordConfirmVisibility}
                            >
                                <img
                                    src={
                                        showPasswordConfirm
                                            ? EyeOffIcon
                                            : EyeIcon
                                    }
                                    alt="비밀번호 숨김/보임"
                                />
                            </InputStyles.ToggleButton>
                        </PasswordContainer>
                        {errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}
                        <InputStyles.LoginButton
                            type="submit"
                            value="회원가입"
                        />
                    </InputField>
                    <InputStyles.DividingLine />
                    <InputStyles.SignUpConatiner>
                        <InputStyles.SignUpText>
                            이미 계정이 있으신가요?
                        </InputStyles.SignUpText>
                        <InputStyles.SignUpButton to="/login">
                            로그인
                        </InputStyles.SignUpButton>
                    </InputStyles.SignUpConatiner>
                </LoginContent>
            </InputStyles.LoginContainer>
            <Footer />
        </div>
    )
}

export default SignUp

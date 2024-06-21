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
2024.06.19  김유림    Modified   회원가입 api연결
2024.06.20  김유림    Modified   에러코드 작성
*/

import React, {useState} from 'react'
import styled from 'styled-components'
import '../assets/fonts/font.css'
import {useNavigate} from 'react-router-dom'
import Footer from '../components/common/Footer'
import NickName from '../assets/images/nickname.svg'
import Password from '../assets/images/password.svg'
import EyeIcon from '../assets/images/eye.svg'
import EyeOffIcon from '../assets/images/eye-off.svg'
import * as InputStyles from '../components/inputs/InputStyles'
import signUp from '../api/SignUp'

const LoginContent = styled(InputStyles.LoginContent)`
    height: 680px;
`

const InputField = styled(InputStyles.InputField)`
    gap: 12px;
    margin: 20px;
`

const NameInput = styled.input`
    ${InputStyles.inputStyles}
    background-image: url(${NickName});
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
    left: -1%;
`

const PasswordConfirmInput = styled.input`
    ${InputStyles.inputStyles}
    background-image: url(${Password});
    padding-right: 30px;
    position: relative;
    left: -1%;
`

const ErrorMsg = styled.p`
    color: red;
    padding-top: 10px;
    margin: 0;
`

const SuccessMsg = styled.p`
    color: green;
    padding-top: 10px;
    margin: 0;
`

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        nickname: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const navigate = useNavigate()

    const handleChange = e => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const passwordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const passwordConfirmVisibility = () => {
        setShowPasswordConfirm(!showPasswordConfirm)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const {name, nickname, email, password, confirmPassword} = formData

        try {
            if (!name || !nickname || !email || !password || !confirmPassword) {
                throw new Error('입력하지 않은 데이터가 있습니다.')
            }

            const nameRegex = /^([가-힣]{2,20}|[a-zA-Z]{2,20})$/
            if (!nameRegex.test(name)) {
                throw new Error(
                    '이름을 2-20자 이내 한글 또는 영문으로 입력해주세요.',
                )
            }

            const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,10}$/
            if (!nicknameRegex.test(nickname)) {
                throw new Error(
                    '닉네임을 2-10자 이내의 한글, 영문자, 숫자로 입력해주세요.',
                )
            }

            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/
            if (
                !passwordRegex.test(password) ||
                !passwordRegex.test(confirmPassword)
            ) {
                throw new Error(
                    '비밀번호를 숫자 포함 8자 이상으로 입력해주세요.',
                )
            }

            if (password !== confirmPassword) {
                throw new Error('비밀번호가 일치하지 않습니다.')
            }

            await signUp(formData)
            setErrorMessage('')
            setSuccessMessage('회원가입이 완료되었습니다!')

            setTimeout(() => {
                setSuccessMessage('')
                navigate('/login')
            }, 2000)
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    return (
        <div>
            <InputStyles.LoginContainer>
                <LoginContent>
                    <InputStyles.Logo>회원가입</InputStyles.Logo>
                    <InputStyles.DividingLine />
                    <InputField onSubmit={handleSubmit}>
                        <NameInput
                            type="text"
                            name="name"
                            placeholder="이름을 입력하세요"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <NickNameInput
                            type="text"
                            name="nickname"
                            placeholder="닉네임을 입력하세요"
                            value={formData.nickname}
                            onChange={handleChange}
                            required
                        />
                        <InputStyles.EmailInput
                            type="email"
                            name="email"
                            placeholder="가입할 이메일을 입력하세요"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <PasswordContainer>
                            <PasswordInput
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="비밀번호를 입력하세요 (특수문자 포함 8자리 이상)"
                                value={formData.password}
                                onChange={handleChange}
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
                                name="confirmPassword"
                                placeholder="입력한 비밀번호를 확인합니다"
                                value={formData.confirmPassword}
                                onChange={handleChange}
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
                        {successMessage && (
                            <SuccessMsg>{successMessage}</SuccessMsg>
                        )}
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

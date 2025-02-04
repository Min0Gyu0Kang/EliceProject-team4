/**
File Name : Login
Description : 로그인 페이지
Author : 임지영

History
Date        Author   Status    Description
2024.06.11  임지영    Created
2024.06.13  임지영    Modified   폰트 적용
2024.06.17  임지영    Modified   SignUp과 겹치는 스타일 InputStyles.js로 분리
2024.06.20  김유림    Modified   비밀번호 찾기 및 스타일 추가
2024.06.21  강민규    Modified   비밀번호 찾기 회원가입 가로 정렬
*/

import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import '../assets/fonts/font.css'
import {Link, useNavigate} from 'react-router-dom'
import {BrowserRouter as Router, useLocation} from 'react-router-dom'
import Footer from '../components/common/Footer'
import Email from '../assets/images/email.svg'
import Password from '../assets/images/password.svg'
import EyeIcon from '../assets/images/eye.svg' // 눈 아이콘 추가
import EyeOffIcon from '../assets/images/eye-off.svg' // 눈 감김 아이콘 추가
import * as InputStyles from '../components/inputs/InputStyles'
import loginUser from '../api/Login' // 로그인 API 함수


const LoginContent = styled(InputStyles.LoginContent)`
    height: 550px;
    margin: 100px;
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
const ErrorMsg = styled.p`
    color: red;
    padding-top: 10px;
    margin: 0;
`

const NotLogin =styled.div`
    flex-direction: row;
    *{
        margin: 10px 10px;
    }
`

const Login = ({onLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null) // 에러 메시지 상태
    const navigate = useNavigate()

    const passwordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword)
    }

    const handleLogin = async e => {
        e.preventDefault()
        try {
            const {accessToken, refreshToken} = await loginUser(email, password)
            onLogin({accessToken, refreshToken})
            navigate('/map') // 로그인 후 페이지 이동
        } catch (error) {
            console.error('로그인 실패:', error)
            if (error.response && error.response.status === 404) {
                setErrorMessage('가입되지 않은 이메일입니다.')
            } else if (error.response && error.response.status === 401) {
                setErrorMessage('비밀번호가 일치하지 않습니다.')
            } else {
                setErrorMessage(
                    '로그인에 실패했습니다. 잠시 후 다시 시도해주세요.',
                )
            }
        }
    }

    return (
        <div>
            <InputStyles.LoginContainer>
                <LoginContent>
                    <InputStyles.Logo>도시의 오아시스</InputStyles.Logo>
                    <InputStyles.DividingLine />
                    <InputField onSubmit={handleLogin}>
                        <InputStyles.EmailInput
                            type="email"
                            placeholder="이메일을 입력하세요"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <PasswordContainer>
                            <PasswordInput
                                type={showPassword ? 'text' : 'password'}
                                placeholder="비밀번호를 입력하세요"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
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
                        {errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}

                        <InputStyles.SignUpText>
                            아직 계정이 없으신가요?
                            <br />
                            계정을 만들고 더 많은 기능을 사용해 보세요!
                        </InputStyles.SignUpText>
                     <NotLogin> {/* 가로로 정렬 */}
                        <InputStyles.SignUpButton to="/signUp">
                            회원가입
                        </InputStyles.SignUpButton>
                        <InputStyles.SignUpButton to="/findPassword">
                            비밀번호 찾기
                        </InputStyles.SignUpButton>
                    </NotLogin>
                    </InputStyles.SignUpConatiner>
                </LoginContent>
            </InputStyles.LoginContainer>
            <Footer />
        </div>
    )
}

export default Login

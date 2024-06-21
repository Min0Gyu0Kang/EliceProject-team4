/**File Name : Withdraw
Description : 회원 탈퇴
Author : 박수정

History
Date        Author   Status     Description
2024.06.20  박수정   Created
2024.06.20  박수정   Modified   회원 탈퇴 기능 추가
2024.06.21  박수정   Modified   회원 탈퇴 기능 수정
*/

import React, {useState} from 'react'
import {withdrawUser} from '../api/Withdraw'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import '../assets/fonts/font.css'
import * as InputStyles from '../components/inputs/InputStyles'
import EyeIcon from '../assets/images/eye.svg'
import EyeOffIcon from '../assets/images/eye-off.svg'
import Footer from '../components/common/Footer'

const WithdrawContent = styled(InputStyles.LoginContent)`
    height: 350px;
`

const InputField = styled(InputStyles.InputField)`
    gap: 26px;
    margin: 20px;
`

const PasswordContainer = styled.div`
    position: relative;
    width: 96.9%;
`

const PasswordInput = styled(InputStyles.PasswordInput)`
    left: -1%;
`

const ErrorMsg = styled.p`
    color: red;
    padding-top: 10px;
    margin: 0;
`

const WithdrawButton = styled(InputStyles.LoginButton)`
    background-color: #ff4d4d;
    &:hover {
        background-color: #ff3333;
    }
`

const WithdrawUser = ({onWithdraw}) => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleChange = e => {
        setPassword(e.target.value)
    }

    const validateForm = () => {
        if (!password) {
            setError('비밀번호를 입력해주세요.')
            return false
        }
        return true
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setError(null)

        if (!validateForm()) {
            return
        }

        try {
            await withdrawUser({password})
            alert('회원탈퇴가 완료되었습니다.')
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            onWithdraw()
            navigate('/')
        } catch (error) {
            if (error.response && error.response.data.error) {
                // 서버에서 반환한 오류 메시지 처리
                if (error.response.data.error === '비밀번호가 틀렸습니다.') {
                    setError('비밀번호가 틀렸습니다.')
                } else {
                    error(error.response.data.error)
                }
            } else {
                setError('회원탈퇴에 실패했습니다.')
            }
        }
    }

    const passwordVisibility = () => setShowPassword(!showPassword)

    return (
        <div>
            <InputStyles.LoginContainer>
                <WithdrawContent>
                    <InputStyles.Logo>회원탈퇴</InputStyles.Logo>
                    <InputStyles.DividingLine />
                    <InputField onSubmit={handleSubmit}>
                        <PasswordContainer>
                            <PasswordInput
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="비밀번호"
                                value={password}
                                onChange={handleChange}
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
                        {error && <ErrorMsg>{error}</ErrorMsg>}
                        <WithdrawButton type="submit" value="회원탈퇴" />
                    </InputField>
                </WithdrawContent>
            </InputStyles.LoginContainer>
            <Footer />
        </div>
    )
}

export default WithdrawUser

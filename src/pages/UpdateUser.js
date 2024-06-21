/**File Name : UpdateUser
Description : 회원정보 수정 페이지
Author : 박수정

History
Date        Author   Status     Description
2024.06.20  박수정   Created    
2024.06.20  박수정   Modified   회원정보 수정 기능 추가
*/

import React, { useState, useEffect } from 'react'
import { mypage } from '../api/Mypage'
import { updateUser } from '../api/UpdateUser'
import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import '../assets/fonts/font.css'
import * as InputStyles from '../components/inputs/InputStyles'
import NickName from '../assets/images/nickname.svg'
import Password from '../assets/images/password.svg'
import EyeIcon from '../assets/images/eye.svg'
import EyeOffIcon from '../assets/images/eye-off.svg'
import Footer from '../components/common/Footer'

const UpdateContent = styled(InputStyles.LoginContent)`
`

const InputField = styled(InputStyles.InputField)`
    gap: 26px;
    margin: 20px;
`

const NameInput = styled.input`
    ${InputStyles.inputStyles}
    background-image: url(${NickName});
    background-color: #f1f1f1;
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

const NewPasswordInput = styled.input`
    ${InputStyles.inputStyles}
    background-image: url(${Password});
    padding-right: 30px;
    position: relative;
    left: -1%;
    z-index: 1;
`

const EmailInput = styled(InputStyles.EmailInput)`
    background-color: #f1f1f1;
`

const ErrorMsg = styled.p`
    color: red;
    padding-top: 10px;
    margin: 0;
`

const UpdateUser = () => {
    const [user, setUser] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        nickname: '',
        email: '',
        password: '',
        newPassword: '',
        confirmNewPassword: ''
    })
    const [error, setError] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getUserInfo()
    }, [])

    const getUserInfo = async () => {
        try {
            const response = await mypage()

            if (response.data) {
                setUser(response.data)

                setFormData(prevState => ({
                    ...prevState,
                    name: response.data.name,
                    nickname: response.data.nickname,
                    email: response.data.email,
                }))
            } else {
                throw new Error('회원 정보를 찾을 수 없습니다.')
            }

        } catch (error) {
            console.error('회원정보 조회 실패:', error)
            setError('회원정보를 조회하는데 실패했습니다.')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const validateForm = () => {

        // 입력하지 않은 데이터 확인
        if (!formData.nickname || !formData.password) {
            setError('입력하지 않은 데이터가 있습니다.')
            return false
        }

        // 닉네임 형식 검사
        const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,10}$/
        if (!nicknameRegex.test(formData.nickname)) {
            setError('닉네임 형식이 올바르지 않습니다.')
            return false
        }

        // 비밀번호 변경 시, 유효성 검사
        if (formData.newPassword !== '' || formData.confirmNewPassword !== '') {
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

            // 비밀번호 형식 검사
            if (!passwordRegex.test(formData.newPassword)) {
                setError('비밀번호를 숫자 포함 8자 이상으로 입력해주세요.')
                return false
            }

            // 비밀번호 일치 여부 확인
            if (formData.newPassword !== formData.confirmNewPassword) {
                setError('새로운 비밀번호가 서로 일치하지 않습니다.')
                return false
            }

            // 이전 비밀번호와의 동일 여부 확인
            if (formData.password === formData.newPassword) {
                setError('이전 비밀번호와 동일한 비밀번호입니다.')
                return false
            }
        }

        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        if (!validateForm()) {
            return
        }

        try {
            const newUserInfo = {
                nickname: formData.nickname,
                password: formData.password
            }

            if (formData.newPassword && formData.confirmNewPassword) {
                newUserInfo.newPassword = formData.newPassword
                newUserInfo.confirmNewPassword = formData.confirmNewPassword
            }

            await updateUser(newUserInfo)

            alert('회원정보가 수정되었습니다.')
            navigate('/users/mypage')
        } catch (error) {

            if (error.response && error.response.data.error) {
                // 서버에서 반환한 오류 메시지 처리
                if (error.response.data.error === '이미 존재하는 닉네임입니다.') {
                    setError('이미 존재하는 닉네임입니다.')
                } else if (error.response.data.error === '기존 비밀번호가 틀렸습니다.') {
                    setError('기존 비밀번호가 틀렸습니다.')
                } else {
                    setError(error.response.data.error)
                }
            } else {
                setError('회원정보 수정에 실패했습니다.')
            }
        }
    }

    if (!user) {
        return
    }

    const passwordVisibility = () => setShowPassword(!showPassword)
    const newPasswordVisibility = () => setShowNewPassword(!showNewPassword)
    const confirmNewPasswordVisibility = () => setShowConfirmNewPassword(!showConfirmNewPassword)

    return (
        <div>
            <InputStyles.LoginContainer>
                <UpdateContent>
                    <InputStyles.Logo>회원정보 수정</InputStyles.Logo>
                    <InputStyles.DividingLine />
                    <InputField onSubmit={handleSubmit}>
                        <NameInput
                            type="text"
                            name="name"
                            placeholder="이름"
                            value={formData.name}
                            onChange={handleChange}
                            readOnly
                        />
                        <NickNameInput
                            type="text"
                            name="nickname"
                            placeholder="닉네임"
                            value={formData.nickname}
                            onChange={handleChange}
                        />
                        <EmailInput
                            type="email"
                            name="email"
                            placeholder="이메일"
                            value={formData.email}
                            onChange={handleChange}
                            readOnly
                        />
                        <PasswordContainer>
                            <PasswordInput
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="현재 비밀번호"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <InputStyles.ToggleButton onClick={passwordVisibility}>
                                <img src={showPassword ? EyeOffIcon : EyeIcon} alt="비밀번호 숨김/보임" />
                            </InputStyles.ToggleButton>
                        </PasswordContainer>
                        <PasswordContainer>
                            <NewPasswordInput
                                type={showNewPassword ? 'text' : 'password'}
                                name="newPassword"
                                placeholder="새 비밀번호"
                                value={formData.newPassword}
                                onChange={handleChange}
                            />
                            <InputStyles.ToggleButton onClick={newPasswordVisibility}>
                                <img src={showNewPassword ? EyeOffIcon : EyeIcon} alt="비밀번호 숨김/보임" />
                            </InputStyles.ToggleButton>
                        </PasswordContainer>
                        <PasswordContainer>
                            <NewPasswordInput
                                type={showConfirmNewPassword ? 'text' : 'password'}
                                name="confirmNewPassword"
                                placeholder="새 비밀번호 확인"
                                value={formData.confirmNewPassword}
                                onChange={handleChange}
                            />
                            <InputStyles.ToggleButton onClick={confirmNewPasswordVisibility}>
                                <img src={showConfirmNewPassword ? EyeOffIcon : EyeIcon} alt="비밀번호 숨김/보임" />
                            </InputStyles.ToggleButton>
                        </PasswordContainer>
                        {error && <ErrorMsg>{error}</ErrorMsg>}
                        <InputStyles.LoginButton type="submit" value="수정 완료" />
                    </InputField>
                </UpdateContent>
            </InputStyles.LoginContainer>
            <Footer />
        </div>
    )
}

export default UpdateUser
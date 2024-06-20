/**
File Name : FindPassword
Description : 비밀번호 찾기 페이지
Author : 김유림

History
Date        Author   Status    Description
2024.06.20  김유림    Created
*/

import React, {useState} from 'react'
import styled from 'styled-components'
import '../assets/fonts/font.css'
import {useNavigate} from 'react-router-dom'
import Footer from '../components/common/Footer'
import NickName from '../assets/images/nickname.svg'
import * as InputStyles from '../components/inputs/InputStyles'
import findPassword from '../api/FindPassword'

const LoginContent = styled(InputStyles.LoginContent)`
    height: 550px;
    margin: 100px;
`

const InputField = styled(InputStyles.InputField)`
    gap: 12px;
    margin: 20px;
`

const NameInput = styled.input`
    ${InputStyles.inputStyles}
    background-image: url(${NickName});
`

const SuccessMsg = styled.p`
    color: green;
    padding-top: 10px;
    margin: 0;
`

const ErrorMsg = styled.p`
    color: red;
    padding-top: 10px;
    margin: 0;
`

const FindPasswordForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const handleFindPassword = async e => {
        e.preventDefault()

        try {
            await findPassword(name, email)
            setMessage(`임시 비밀번호가 이메일로 발송되었습니다.`)
        } catch (error) {
            console.error('비밀번호 찾기 오류:', error)
            setError('서버 오류가 발생했습니다.')
        }
    }

    return (
        <div>
            <InputStyles.LoginContainer>
                <LoginContent>
                    <InputStyles.Logo>비밀번호 찾기</InputStyles.Logo>
                    <InputStyles.DividingLine />
                    <InputField onSubmit={handleFindPassword}>
                        <NameInput
                            type="text"
                            name="name"
                            placeholder="이름을 입력하세요"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                        <InputStyles.EmailInput
                            type="email"
                            name="email"
                            placeholder="가입한 이메일을 입력하세요"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <InputStyles.LoginButton
                            type="submit"
                            value="임시 비밀번호 발송"
                            to="/login"
                        />
                    </InputField>
                    <InputStyles.DividingLine />
                    <InputStyles.SignUpConatiner>
                        <InputStyles.SignUpText>
                            {message && <SuccessMsg>{message}</SuccessMsg>}
                            {error && <ErrorMsg>{error}</ErrorMsg>}
                        </InputStyles.SignUpText>
                        <InputStyles.SignUpButton to="/login">
                            로그인 하러가기
                        </InputStyles.SignUpButton>
                    </InputStyles.SignUpConatiner>
                </LoginContent>
            </InputStyles.LoginContainer>
            <Footer />
        </div>
    )
}

export default FindPasswordForm

/**File Name : Mypage
Description : 회원정보 조회 페이지
Author : 박수정

History
Date        Author   Status     Description
2024.06.20  박수정   Created
2024.06.20  박수정   Modified   회원정보 조회 기능 추가
*/

import React, { useState, useEffect } from 'react'
import { mypage } from '../api/Mypage'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import '../assets/fonts/font.css'
import * as InputStyles from '../components/inputs/InputStyles'
import Footer from '../components/common/Footer'

const MypageContent = styled(InputStyles.LoginContent)`
    height: 550px;
`

const UserInfoField = styled(InputStyles.InputField)`
    gap: 26px;
    margin: 20px;
`

const UserInfoItem = styled.div`
    ${InputStyles.inputStyles}
    background-color: #ffffff;
    display: flex;
    align-items: center;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 40px;
`

const Button = styled.button`
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

const Title = styled(InputStyles.Logo)`
`

const Mypage = () => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getUserInfo()
    }, [])

    const getUserInfo = async () => {
        try {
            const response = await mypage()

            if (response.data) {
                setUser(response.data)
            } else {
                throw new Error('회원 정보를 찾을 수 없습니다.')
            }
        } catch (error) {
            console.error('회원정보 조회 실패:', error)
        }
    }
    
    const moveUpdateUser = () => {
        navigate('/users/update')
    }
    const moveWithdraw = () => {
        navigate('/users/withdraw')
    }

    if (!user) {
        return
    }

    return (
        <div>
            <InputStyles.LoginContainer>
                <MypageContent>
                    <Title>마이페이지</Title>
                    <InputStyles.DividingLine />
                    <UserInfoField>
                        <UserInfoItem>이름: {user.name}</UserInfoItem>
                        <UserInfoItem>닉네임: {user.nickname}</UserInfoItem>
                        <UserInfoItem>이메일: {user.email}</UserInfoItem>
                        <ButtonContainer>
                            <Button onClick={moveUpdateUser}>회원정보 수정</Button>
                            <Button onClick={moveWithdraw}>회원 탈퇴</Button>
                        </ButtonContainer>
                    </UserInfoField>
                    <InputStyles.DividingLine />
                </MypageContent>
            </InputStyles.LoginContainer>
            <Footer />
        </div>
    )
}

export default Mypage
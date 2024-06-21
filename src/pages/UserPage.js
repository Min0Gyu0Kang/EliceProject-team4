/**File Name : UserPage
Description : 회원 페이지
Author : 박수정

History
Date        Author   Status     Description
2024.06.20  박수정   Created
2024.06.20  박수정   Modified   회원 페이지 추가
*/

import React from 'react';
import { useNavigate  } from 'react-router-dom';
import styled from 'styled-components'
import '../assets/fonts/font.css'
import * as InputStyles from '../components/inputs/InputStyles'
import Footer from '../components/common/Footer'

const UserPageContent = styled(InputStyles.LoginContent)`
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
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

const UserPage = () => {
    const navigate = useNavigate();

    const moveMypage = () => {
        navigate('/users/mypage');
    };

    return (
        <div>
            <InputStyles.LoginContainer>
                <UserPageContent>
                    <Title>회원 페이지</Title>
                    <InputStyles.DividingLine />
                    <ButtonContainer>
                        <Button onClick={moveMypage}>마이페이지</Button>
                    </ButtonContainer>
                    <InputStyles.DividingLine />
                </UserPageContent>
            </InputStyles.LoginContainer>
            <Footer />
        </div>
    );
};

export default UserPage;
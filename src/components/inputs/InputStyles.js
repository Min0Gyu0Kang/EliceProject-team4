/**
File Name : InputStyles
Description : 로그인/회원가입 겹치는 스타일 분리
Author : 임지영

History
Date        Author   Status    Description
2024.06.17  임지영    Created
*/

import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'
import Email from '../../assets/images/email.svg'
import Password from '../../assets/images/password.svg'

export const LoginContainer = styled.div`
    font-family: 'gmarket Medium';
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f3eb;
    width: 750px;
    border: none;
    border-radius: 31px;
    padding: 15px 50px;
`

export const Logo = styled.div`
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

export const DividingLine = styled.hr`
    width: 100%;
    border: 0.5px solid #828282;
    transform: matrix(1, 0, 0, 1, 0, 0);
`

export const InputField = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const inputStyles = css`
    width: 90%;
    height: 35px;
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

export const EmailInput = styled.input`
    ${inputStyles}
    background-image: url(${Email});
`

export const PasswordInput = styled.input`
    ${inputStyles}
    background-image: url(${Password});
    padding-right: 30px; // 아이콘 공간 확보
    position: relative;
    z-index: 1;
`

export const LoginButton = styled.input`
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

export const SignUpButton = styled(Link)`
    color: #4f6f52;
`

export const ToggleButton = styled.button`
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    z-index: 2;
`

export const SignUpConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    font-weight: bold;
`

export const SignUpText = styled.div`
    font-weight: 400;
    text-align: center;
    margin: 12px;
    color: #737373;
    font-size: 10pt;
    line-height: 20px;
`

/**
File Name : LoginModal
Description : 로그인 알림 모달창
Author : 임지영

History
Date        Author   Status    Description
2024.06.14  임지영    Created   
2024.06.15  임지영    Modified   매개변수 수정 for 버튼 연결
*/

import * as React from 'react'
import {useNavigate} from 'react-router-dom'
import styled, {css} from 'styled-components'
import {StyledEngineProvider} from '@mui/styled-engine'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Alert from '../../../assets/images/alert (1).svg'
import LoginModalText from '../../common/LoginModalText'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: '34px',
    boxShadow: 24,
    p: 4,
}

const ModalContainer = styled.div`
    text-align: center;
`

const ButtonContainer = styled.div`
    font-family: 'gmarket Medium';
    display: flex;
    justify-content: center;
    margin-top: 50px;
`

const ButtonStyle = css`
    width: 160px;
    height: 40px;
    border-radius: 30px;
    text-align: center;
    font-size: 13pt;
`

const Cancel = styled.button`
    ${ButtonStyle}
    border: 0.2px solid grey;
    color: #5f5c5c;
    background-color: white;
    margin-right: 20px;

    &:hover {
        cursor: pointer;
        background-color: #e3e3e2;
    }
`

const Confirm = styled.button`
    ${ButtonStyle}
    background-color: #30CB6E;
    border: none;
    color: #ffffff;

    &:hover {
        cursor: pointer;
        background-color: #28b761;
    }
`

export default function LoginModal({open, handleClose}) {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <StyledEngineProvider injectFirst>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ModalContainer>
                        <img src={Alert} alt="알림 아이콘" />
                        <LoginModalText text="리뷰를" />
                        <ButtonContainer>
                            <Cancel onClick={handleClose}>취소</Cancel>
                            <Confirm onClick={handleLogin}>확인</Confirm>
                        </ButtonContainer>
                    </ModalContainer>
                </Box>
            </Modal>
        </StyledEngineProvider>
    )
}

/**
File Name : ReviewModal
Description : 리뷰 작성 모달창
Author : 임지영

History
Date        Author   Status    Description
2024.06.15  임지영    Created   
⭐️⭐️ 완료 클릭시 리뷰 상세보기로 이동 (Navigate 수정 필요)
⭐️⭐️ 공원 이름 및 별점 가져오기
*/

import * as React from 'react'
import {useNavigate} from 'react-router-dom'
import styled, {css} from 'styled-components'
import {StyledEngineProvider} from '@mui/styled-engine'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import '../../../assets/fonts/font.css'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'

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

const ReviewTitle = styled.div`
    font-size: 20pt;
    font-family: 'gmarket Medium';
    font-weight: 900;
`

const Green = styled.span`
    color: #30cb6e;
`

const Hr = styled.hr`
    background-color: #30cb6e;
    height: 3px;
    border: 0;
    margin: 15px 0;
`
const WritingReview = styled.div`
    font-family: 'Pretendard';
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`

const Content = styled.textarea`
    width: 90%;
    height: 130px;
    border-radius: 7px;
    border: #cacaca 1px solid;
    font-size: 13pt;
    padding: 15px;

    &::placeholder {
        color: grey;
        font-size: 13pt;
    }
`

const ButtonContainer = styled.div`
    font-family: 'gmarket Medium';
    display: flex;
    justify-content: center;
    margin-top: 25px;
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

export default function ReviewModal({open, handleClose}) {
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
                        <ReviewTitle>
                            리뷰 <Green>작성하기</Green>
                        </ReviewTitle>
                        <Hr />
                        <WritingReview>
                            <div style={{fontSize: '18pt'}}>늘벗공원</div>
                            <Stack direction="row" spacing={1.5}>
                                <Rating
                                    name="half-rating"
                                    defaultValue={4.5}
                                    precision={0.5}
                                    readOnly
                                />
                            </Stack>
                            <Content placeholder="내용을 입력해주세요"></Content>
                        </WritingReview>
                        <ButtonContainer>
                            <Cancel onClick={handleClose}>취소</Cancel>
                            <Confirm onClick={handleLogin}>완료</Confirm>
                        </ButtonContainer>
                    </ModalContainer>
                </Box>
            </Modal>
        </StyledEngineProvider>
    )
}

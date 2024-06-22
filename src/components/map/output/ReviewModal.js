/**
File Name : ReviewModal
Description : 리뷰 작성 모달창
Author : 임지영

History
Date        Author   Status    Description
2024.06.15  임지영    Created 
2024.06.17  임지영    Modified    API 연결
2024.06.19  임지영    Modified    API 연결 수정 및  글자수 제한 css
2024.06.20  임지영    Modified   fetch -> axios
*/

import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import {StyledEngineProvider} from '@mui/styled-engine'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import '../../../assets/fonts/font.css'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import axios from 'axios'
// import {setRating} from '../../redux/parkSlice'
import {useDispatch, useSelector} from 'react-redux'

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
    border: ${({isOverLimit}) =>
        isOverLimit ? '2px solid red' : '1px solid #cacaca'};
    font-size: 13pt;
    padding: 15px;

    &::placeholder {
        color: grey;
        font-size: 13pt;
    }

    &:focus {
        outline: none;
        border: ${({isOverLimit}) =>
            isOverLimit ? '2px solid red' : '2px solid #30cb6e'};
    }
`

const OverLimit = styled.div`
    color: red;
    margin-top: 5px;
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

export default function ReviewModal({
    open,
    handleClose,
    park,
    onReviewDetailClick,
}) {
    const selectedParkId = useSelector(state => state.park.selectedParkId)

    const [content, setContent] = useState('')
    const [rating, setRating] = useState(0)
    const [isOverLimit, setIsOverLimit] = useState(false)

    const handleContentChange = e => {
        const newContent = e.target.value
        setContent(newContent)
        setIsOverLimit(newContent.length > 400)
    }

    const handleRatingChange = (e, newRating) => {
        setRating(newRating)
    }

    const handleCancel = () => {
        setContent('')
        setRating(0)
        handleClose()
    }

    const postReview = async () => {
        if (!content || rating === 0) {
            alert('별점과 내용을 모두 입력해주세요.')
            return
        }

        const token = localStorage.getItem('accessToken')
        console.log('토큰', token)
        try {
            const response = await axios.post(
                `park-review/${selectedParkId}`,
                {
                    content: content,
                    grade: rating,
                },
                {
                    headers: {Authorization: `Bearer ${token}`},
                },
            )
            if (response.status !== 201) {
                throw new Error('네트워크 응답이 올바르지 않습니다.')
            }
            console.log(response.data)
            handleCancel() // 모달창 닫기
            onReviewDetailClick() // 리뷰 상세보기로 이동
        } catch (error) {
            console.error('리뷰 전송 중 오류가 발생했습니다:', error)
        }
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
                            <div style={{fontSize: '18pt'}}>{park?.name}</div>
                            <Stack direction="row" spacing={1.5}>
                                <Rating
                                    name="half-rating"
                                    defaultValue={0}
                                    precision={1}
                                    value={rating}
                                    onChange={handleRatingChange}
                                />
                            </Stack>
                            <Content
                                placeholder="내용을 입력해주세요 (400자 이내)"
                                value={content}
                                onChange={handleContentChange}
                                isOverLimit={isOverLimit}
                            ></Content>
                        </WritingReview>
                        {isOverLimit ? (
                            <OverLimit>400자 이내로 작성해주세요</OverLimit>
                        ) : null}
                        <ButtonContainer>
                            <Cancel onClick={handleCancel}>취소</Cancel>
                            <Confirm onClick={postReview}>완료</Confirm>
                        </ButtonContainer>
                    </ModalContainer>
                </Box>
            </Modal>
        </StyledEngineProvider>
    )
}

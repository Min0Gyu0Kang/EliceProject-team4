/**
File Name : Button
Description : right section 리뷰작성하기, 상세보기 버튼
Author : 김유림

History
Date        Author   Status    Description
2024.06.14  김유림    Created  
2024.06.15  임지영    Modified   리뷰작성하기 버튼 클릭시 로그인 모달창 띄우기
2024.06.15  김유림    Modified   리뷰상세보기 버튼 클릭시 onReviewDetailClick함수 실행
*/

import * as React from 'react'
import {useState} from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import LoginModal from './LoginModal'
import ReviewModal from './ReviewModal'

const Button = ({park, parkId, onReviewDetailClick}) => {
    const [openModal, setOpenModal] = useState(false)

    const handleClick = async () => {
        setOpenModal(true)
    }

    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <Stack direction="row" spacing={4}>
            <Chip
                label="리뷰 작성하기"
                onClick={handleClick}
                sx={{
                    backgroundColor: '#ffffff',
                    color: 'grey',
                    padding: '18px 21px',
                    fontSize: '1rem',
                }}
                variant="outlined"
                size="large"
            />
            <Chip
                label="리뷰 상세보기"
                onClick={onReviewDetailClick}
                sx={{
                    backgroundColor: '#30cb6e',
                    color: 'white',
                    padding: '19px 15px',
                    fontSize: '1rem',
                }}
                size="large"
            />
            {/* <LoginModal open={openModal} handleClose={handleClose} /> */}
            <ReviewModal
                park={park}
                parkId={parkId}
                open={openModal}
                handleClose={handleClose}
                onReviewDetailClick={onReviewDetailClick}
            />
        </Stack>
    )
}

export default Button

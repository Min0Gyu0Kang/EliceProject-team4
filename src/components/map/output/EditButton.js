import * as React from 'react'
import {useState} from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import EditReviewModal from './EditReviewModal'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {setReReview} from '../../redux/parkSlice'

const EditButton = ({
    parkData,
    myData,
    reviewId,
    onReviewDetailClick,
    onDeleteReview,
}) => {
    const dispatch = useDispatch()
    const reReview = useSelector(state => state.park.reReview)
    const [openEditModal, setOpenEditModal] = useState(false)
    console.log('ff', parkData)

    const handleClick = async () => {
        setOpenEditModal(true)
    }

    const handleCloseEditModal = () => {
        setOpenEditModal(false)
    }
    console.log(reviewId)

    const handleDelete = async () => {
        const token = localStorage.getItem('accessToken')
        console.log('토큰', token)
        try {
            const response = await axios.delete(`park-review/${reviewId}`, {
                headers: {Authorization: `Bearer ${token}`},
            })
            if (response.status !== 200) {
                throw new Error('네트워크 응답이 올바르지 않습니다.')
            }
            dispatch(setReReview(!reReview))
        } catch (error) {
            console.error('리뷰 전송 중 오류가 발생했습니다:', error)
        }
    }
    console.log(myData)
    return (
        <Stack direction="row" spacing={4} sx={{marginLeft: '30%'}}>
            <Chip
                label="수정"
                onClick={handleClick}
                sx={{
                    backgroundColor: '#ffffff',
                    color: 'grey',
                    padding: '12px 6px',
                    fontSize: '1rem',
                }}
                variant="outlined"
                size="large"
            />
            <Chip
                label="삭제"
                onClick={handleDelete}
                sx={{
                    backgroundColor: '#F5A9A9',
                    color: 'white',
                    padding: '12px 6px',
                    fontSize: '1rem',
                }}
                size="large"
            />
            <EditReviewModal
                park={myData}
                parkName={parkData}
                reviewId={reviewId}
                open={openEditModal}
                handleClose={handleCloseEditModal}
                onReviewDetailClick={onReviewDetailClick}
            />
        </Stack>
    )
}

export default EditButton

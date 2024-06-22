/**
File Name : DirectInputButton
Description : 선택 초기화, 검색 버튼
Author : 임지영

History
Date        Author   Status    Description
2024.06.18  임지영    Created
2024.06.20  임지영    Modified   fetch -> axios
2024.06.22  김유림    Modified   칩 크기 레이아웃 수정
2024.06.22  이유민    Modified   비활성화 추가
*/

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import {
    setSearchResults,
    setShowParkList,
    resetSelection,
    setIsPark,
    setIsLocation,
    clearSelection,
    setName,
    setSelectedParkId,
    setIsSearchResults,
    setUrl,
} from '../../redux/parkSlice'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

// 추천공원 검색 시
function DirectInputButton({openParkList}) {
    const dispatch = useDispatch()
    const {name, isPark} = useSelector(state => state.park)
    const isNameValid = name !== ''

    const handleClick = async () => {
        dispatch(setIsSearchResults(false))
        dispatch(setSelectedParkId(null))
        dispatch(setIsLocation(false))

        const url = `/park/search/${name}`
        dispatch(setUrl(url))
        try {
            const response = await axios.get(url)
            dispatch(setSearchResults(response.data)) // 상위 컴포넌트로 데이터 전달
            dispatch(setShowParkList(true)) // 검색이 완료되면 openParkList 함수 호출
            dispatch(setIsLocation(false))
            dispatch(setIsPark(true))
            if (response.data.data.length === 0) {
                dispatch(setIsSearchResults(true))
            }
        } catch (error) {
            dispatch(setShowParkList(false))
            dispatch(setIsSearchResults(true))
            console.error('Error fetching park recommendations:', error)
        }
    }

    const handleClearClick = () => {
        dispatch(resetSelection())
        dispatch(setShowParkList(false)) // 초기화 버튼 누르면 내주변공원 출력 상태가 false가 되도록
        dispatch(clearSelection())
        dispatch(setName(''))
        openParkList()
    }

    return (
        <Stack direction="row" spacing={4} justifyContent="center">
            <Chip
                label="선택 초기화"
                sx={{
                    backgroundColor: '#ffffff',
                    color: 'grey',
                    padding: '18px 20px',
                    fontSize: '1rem',
                }}
                variant="outlined"
                size="large"
                onClick={handleClearClick}
            />
            <Chip
                label="추천 공원 검색"
                sx={{
                    backgroundColor: '#30cb6e',
                    color: 'white',
                    padding: '19px 18px',
                    fontSize: '1rem',
                    cursor: isNameValid ? 'pointer' : 'not-allowed', // name 입력 안 하면 선택 못함
                }}
                size="large"
                onClick={handleClick}
                disabled={!isNameValid} // name 입력 안 하면 비활성화
            />
        </Stack>
    )
}

export default DirectInputButton

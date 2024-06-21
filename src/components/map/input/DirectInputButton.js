/**
File Name : DirectInputButton
Description : 선택 초기화, 검색 버튼
Author : 임지영

History
Date        Author   Status    Description
2024.06.18  임지영    Created
2024.06.20  임지영    Modified   fetch -> axios
*/

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import {
    setSearchResults,
    setShowParkList,
    resetSelection,
    setGetName,
    setIsLocation,
    clearSelection,
    setName,
    setSelectedParkId,
    setIsSearchResults,
    setUrl,
} from '../../redux/parkSlice'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import {StyledEngineProvider} from '@mui/styled-engine'

// 추천공원 검색 시
function DirectInputButton() {
    const dispatch = useDispatch()
    const {name} = useSelector(state => state.park)

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

            if (response.data.data.length === 0) {
                dispatch(setIsSearchResults(true))
            }
        } catch (error) {
            console.error('Error fetching park recommendations:', error)
        }
    }

    const handleClearClick = () => {
        dispatch(resetSelection())
        dispatch(setShowParkList(false)) // 초기화 버튼 누르면 내주변공원 출력 상태가 false가 되도록
        dispatch(clearSelection())
        dispatch(setName(''))
    }

    return (
        <StyledEngineProvider injectFirst>
            <Stack direction="row" spacing={6.5} justifyContent="center">
                <Chip
                    label="선택 초기화"
                    sx={{
                        backgroundColor: '#ffffff',
                        color: 'grey',
                        padding: '5% 8%',
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
                        padding: '5.3% 5.3%',
                        fontSize: '1rem',
                    }}
                    size="large"
                    onClick={handleClick}
                />
            </Stack>
        </StyledEngineProvider>
    )
}

export default DirectInputButton

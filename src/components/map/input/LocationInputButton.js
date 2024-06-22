/**
File Name : LocationInputButton
Description : 선택 초기화, 검색 버튼
Author : 임지영

History
Date        Author   Status    Description
2024.06.17  임지영    Created   유림님이 만들어주신 Button 적용
2024.06.18  임지영      Done    스타일 완성
2024.06.20  임지영    Modified   fetch -> axios
2024.06.22  김유림    Modified   칩 위치 수정, 전체 레이아웃 수정 
2024.06.22  이유민    Modified   비활성화 추가
*/

import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {
    setSearchResults,
    setShowParkList,
    resetSelection,
    clearSelection,
    setIsLocation,
    setSelectedParkId,
    setSelectedChips,
    setIsSearchResults,
    setUrl,
    setStar,
} from '../../redux/parkSlice'
import {StyledEngineProvider} from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import {useSelector} from 'react-redux'
import {assignNestedKeys} from '@mui/system/cssVars/cssVarsParser'

// 추천공원 검색 시
const LocationInputButton = ({openParkList}) => {
    const dispatch = useDispatch()

    const {city, district, selectedChips, star} = useSelector(
        state => state.park,
    )
    const isCityValid = city !== ''

    const handleSearchClick = async () => {
        dispatch(setIsSearchResults(false))
        dispatch(setSelectedParkId(null))
        dispatch(setIsLocation(true))

        const queryParams = new URLSearchParams()
        if (city) queryParams.append('city', city)
        if (district) queryParams.append('district', district)
        if (selectedChips && selectedChips.length > 0) {
            queryParams.append('facilities', selectedChips.join(','))
        }

        const url = `/park/recommend?${queryParams.toString()}`
        dispatch(setUrl(url))
        try {
            const response = await axios.get(url)
            console.log('response', response)
            dispatch(setSearchResults(response.data))
            dispatch(setShowParkList(true))
            dispatch(setIsLocation(true))
            if (response.data.data.length === 0) {
                dispatch(setIsSearchResults(true))
            }
            dispatch(setStar(!star))
        } catch (error) {
            console.error('Error fetching park recommendations:', error)
        }
    }

    const handleClearClick = () => {
        dispatch(resetSelection())
        dispatch(clearSelection())
        dispatch(setShowParkList(false)) // 초기화 버튼 누르면 내주변공원 출력 상태가 false가 되도록
        dispatch(setIsLocation(null))
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
                    cursor: isCityValid ? 'pointer' : 'not-allowed', // city 선택 안 하면 선택 못함
                }}
                size="large"
                onClick={handleSearchClick}
                disabled={!isCityValid} // city 선택 안 하면 비활성화
            />
        </Stack>
    )
}

export default LocationInputButton

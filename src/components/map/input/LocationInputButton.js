/**
File Name : LocationInputButton
Description : 선택 초기화, 검색 버튼
Author : 임지영

History
Date        Author   Status    Description
2024.06.17  임지영    Created   유림님이 만들어주신 Button 적용
2024.06.18  임지영      Done    스타일 완성
2024.06.20  임지영    Modified   fetch -> axios
*/

import React, {useState} from 'react'
import axios from 'axios'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import {StyledEngineProvider} from '@mui/styled-engine'

// 추천공원 검색 시
const LocationInputButton = ({
    selectedValues,
    onSearchComplete,
    openParkList,
    onClearSelection,
}) => {
    const [isSearched, setIsSearched] = useState(true)
    const handleSearchClick = async () => {
        const {city, district, selectedChips} = selectedValues
        const isSearched = true

        const queryParams = new URLSearchParams()
        if (city) queryParams.append('city', city)
        if (district) queryParams.append('district', district)
        if (selectedChips && selectedChips.length > 0) {
            queryParams.append('facilities', selectedChips.join(','))
        }

        const url = `/park/recommend?${queryParams.toString()}`

        try {
            const response = await axios.get(url)

            if (typeof onSearchComplete === 'function') {
                onSearchComplete(response.data) // 상위 컴포넌트로 데이터 전달
                openParkList(isSearched) // 검색이 완료되면 openParkList 함수 호출
            } else {
                console.error('onSearchComplete is not a function')
            }
        } catch (error) {
            console.error('Error fetching park recommendations:', error)
        }
    }

    const handleClearClick = () => {
        onClearSelection() 
        setIsSearched(false)
        openParkList(isSearched) // 초기화 버튼 누르면 내주변공원 출력 상태가 false가 되도록
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
                    onClick={handleSearchClick}
                />
            </Stack>
        </StyledEngineProvider>
    )
}

export default LocationInputButton

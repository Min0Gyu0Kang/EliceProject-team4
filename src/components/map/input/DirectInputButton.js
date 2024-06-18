/**
File Name : DirectInputButton
Description : 선택 초기화, 검색 버튼
Author : 임지영

History
Date        Author   Status    Description
2024.06.18  임지영    Created
*/

import React, {useState} from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import {StyledEngineProvider} from '@mui/styled-engine'

// 추천공원 검색 시
function DirectInputButton({onSearchComplete, openParkInfo, name}) {
    const handleClick = async () => {
        const url = `/park/search/${name})}`

        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json() // 응답을 JSON으로 변환
            if (typeof onSearchComplete === 'function') {
                onSearchComplete(data) // 상위 컴포넌트로 데이터 전달
                openParkInfo() // 검색이 완료되면 openParkList 함수 호출
            } else {
                console.error('onSearchComplete is not a function')
            }
        } catch (error) {
            console.error('Error fetching park recommendations:', error)
        }
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
                    // onClick={handleClear}
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

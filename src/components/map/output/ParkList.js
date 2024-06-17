/**
File Name : ParkList
Description : 내주변 공원 리스트
Author : 임지영

History
Date        Author   Status    Description
2024.06.14  임지영    Created  
2024.06.14  임지영    Modified   API 연결
*/

import React, {useState} from 'react'
import styled from 'styled-components'
import '../../../assets/fonts/font.css'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import {StyledEngineProvider} from '@mui/styled-engine'
import {useParkData} from '../../common/useParkData'
import ParkName from '../../common/ParkName'
import API from '../../../config'

const ParkListContainer = styled.div`
    font-family: 'Pretendard';
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 16px;
`

const List = styled.div`
    margin-bottom: 16px;
`

const Number = styled.p`
    font-weight: 800;
    font-size: 18pt;
    width: 20px;
    text-align: center;
`

const ParkList = () => {
    const city = '서울특별시'
    const district = '강남구'
    const page = 1

    const [url, setUrl] = useState(
        `${API.recommend_park}?city=${city}&district=${district}&page=${page}`,
    )
    const {parkData, error} = useParkData(url)

    //페이지네이션
    // const page = parkData.maxPage

    // 왼쪽 컴포넌트의 >추천 공원 검색< 버튼 클릭시 실행될 함수
    const handleLoadClick = () => {
        setUrl(`${API.recommend_park}`)
    }
    /* 추천공원검색 버튼 예시
        <div>
            <button onClick={handleLoadClick}>추천 공원 검색</button>
            {error && <p>Error: {error.message}</p>}
        </div> 
    */
    const [rating, setRating] = useState(null)
    //const [rating, setRating] = useState(null);
    // setValue(parkData.data.average_review)

    return (
        <StyledEngineProvider injectFirst>
            <ParkListContainer>
                {parkData &&
                    parkData.data &&
                    parkData.data.slice(0, 5).map((park, index) => (
                        <List key={park.id || index}>
                            <Stack direction="row" spacing={1.5}>
                                <Number>{index + 1}</Number>
                                <ParkName
                                    name={park.name}
                                    address={park.address}
                                />
                                <Rating
                                    name="half-rating"
                                    defaultValue={setRating(
                                        park.average_review,
                                    )}
                                    precision={0.5}
                                    readOnly
                                />
                            </Stack>
                        </List>
                    ))}
                {error && <p>Error: {error.message}</p>}
            </ParkListContainer>
        </StyledEngineProvider>
    )
}

export default ParkList

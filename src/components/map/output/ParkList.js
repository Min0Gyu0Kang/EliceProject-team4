/**
File Name : ParkList
Description : 내주변 공원 리스트
Author : 임지영

History
Date        Author   Status    Description
2024.06.14  임지영    Created   
*/

import React, {useState} from 'react'
import styled from 'styled-components'
import '../../../assets/fonts/font.css'
import IconStar from '../../../assets/images/IconStar.svg'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import {StyledEngineProvider} from '@mui/styled-engine'
import {useParkData} from '../../common/useParkData'
import ParkName from '../../common/ParkName'

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
    const [url, setUrl] = useState('')
    const {parkData, error} = useParkData(url)

    //페이지네이션
    // const page = parkData.maxPage

    // 왼쪽 컴포넌트의 >추천 공원 검색< 버튼 클릭시 실행될 함수
    const handleLoadClick = () => {
        setUrl('API 주소 넣어야 함')
    }
    /* 추천공원검색 버튼 예시
        <div>
            <button onClick={handleLoadClick}>추천 공원 검색</button>
            {error && <p>Error: {error.message}</p>}
        </div> 
    */
    const [rating, setRating] = useState(4.5)
    //const [rating, setRating] = useState(null);
    // setValue(parkData.data.average_review)

    return (
        <StyledEngineProvider injectFirst>
            <ParkListContainer>
                <List>
                    <Stack direction="row" spacing={1.5}>
                        <Number>1</Number>
                        <ParkName
                            name="늘벗공원"
                            address="서울시 강남구 대치동 501"
                        />
                        <Rating
                            name="half-rating"
                            defaultValue={rating}
                            precision={0.5}
                            readOnly
                        />
                    </Stack>
                </List>
                <List>
                    <Stack direction="row" spacing={1.5}>
                        <Number>2</Number>
                        <ParkName
                            name="늘푸른공원"
                            address="서울시 강남구 일원동 690"
                        />
                        <Rating
                            name="half-rating"
                            defaultValue={4}
                            precision={0.5}
                            readOnly
                        />
                    </Stack>
                </List>
                <List>
                    <Stack direction="row" spacing={1.5}>
                        <Number>3</Number>
                        <ParkName
                            name="신사근린공원"
                            address="서울시 강남구 압구정동 422"
                        />
                        <Rating
                            name="half-rating"
                            defaultValue={4}
                            precision={0.5}
                            readOnly
                        />
                    </Stack>
                </List>
                <List>
                    <Stack direction="row" spacing={1.5}>
                        <Number>4</Number>
                        <ParkName
                            name="포이근린공원"
                            address="서울시 강남구 개포동 1239-21"
                        />
                        <Rating
                            name="half-rating"
                            defaultValue={3.5}
                            precision={0.5}
                            readOnly
                        />
                    </Stack>
                </List>
                <List>
                    <Stack direction="row" spacing={1.5}>
                        <Number>5</Number>
                        <ParkName
                            name="청수근린공원"
                            address="서울시 강남구 청담동 123-13"
                        />
                        <Rating
                            name="half-rating"
                            defaultValue={2.5}
                            precision={0.5}
                            readOnly
                        />
                    </Stack>
                </List>
            </ParkListContainer>
        </StyledEngineProvider>
    )
}

export default ParkList

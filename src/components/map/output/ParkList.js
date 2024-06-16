/**
File Name : ParkList
Description : 내주변 공원 리스트
Author : 임지영

History
Date        Author   Status    Description
2024.06.14  임지영    Created   
2024.06.16  김유림    Modified   각 리스트 클릭시 onParkClick함수 실행 
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

const ParkList = ({onParkClick}) => {
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

    const parks = [
        {
            id: 1,
            name: '늘벗공원',
            address: '서울시 강남구 대치동 501',
            rating: 4,
            type: '어린이공원',
            phone: '02-1234-1234',
            facilities: [{category: '운동시설', name: '농구장'}],
        },
        {
            id: 2,
            name: '늘푸른공원',
            address: '서울시 강남구 일원동 690',
            rating: 4,
            type: '어린이공원',
            phone: '02-1234-1235',
            facilities: [
                {category: '운동시설', name: '농구장'},
                {category: '편익시설', name: '화장실'},
            ],
        },
        {
            id: 3,
            name: '신사근린공원',
            address: '서울시 강남구 압구정동 422',
            rating: 4,
            type: '근린공원',
            phone: '02-1234-1236',
            facilities: [
                {category: '운동시설', name: '농구장'},
                {category: '편익시설', name: '화장실'},
            ],
        },
        {
            id: 4,
            name: '포이근린공원',
            address: '서울시 강남구 개포동 218',
            rating: 4,
            type: '근린공원',
            phone: '02-1234-1237',
            facilities: [
                {category: '운동시설', name: '농구장'},
                {category: '편익시설', name: '화장실'},
            ],
        },
        {
            id: 4,
            name: '청수근린공원',
            address: '서울시 강남구 청담동 123-13',
            rating: 4,
            type: '근린공원',
            phone: '02-1234-1237',
            facilities: [
                {category: '운동시설', name: '농구장'},
                {category: '편익시설', name: '화장실'},
                {category: '유희시설', name: '놀이대'},
            ],
        },
    ]

    return (
        <StyledEngineProvider injectFirst>
            <ParkListContainer>
                {parks.map((park, index) => (
                    <List key={index} onClick={() => onParkClick(park)}>
                        <Stack direction="row" spacing={1.5}>
                            <Number>{index + 1}</Number>
                            <ParkName name={park.name} address={park.address} />
                            <Rating
                                name="half-rating"
                                defaultValue={park.rating}
                                precision={0.5}
                                readOnly
                            />
                        </Stack>
                    </List>
                ))}
            </ParkListContainer>
        </StyledEngineProvider>
    )
}

export default ParkList

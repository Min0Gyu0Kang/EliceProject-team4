/**
File Name : ParkList
Description : 내주변 공원 리스트
Author : 임지영

History
Date        Author   Status    Description
2024.06.14  임지영    Created   
2024.06.16  김유림    Modified   각 리스트 클릭시 onParkClick함수 실행 
2024.06.17  임지영    Modified   API 연결
2024.06.17  김유림    Modified   api 와 맞게 더미데이터 수정 
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

const ParkList = ({city, district, onParkClick}) => {
    const [url, setUrl] = useState('')

    const {parkData, error} = useParkData(
        `${API.recommend_park}?city=${city}&district=${district}`,
    )

    const parks = [
        {
            id: 1,
            name: '늘벗공원',
            address: '서울시 강남구 대치동 501',
            average_review: 1,
        },
        {
            id: 2,
            name: '늘푸른공원',
            address: '서울시 강남구 일원동 690',
            average_review: 2,
        },
        {
            id: 3,
            name: '신사근린공원',
            address: '서울시 강남구 압구정동 422',
            average_review: 3,
        },
        {
            id: 4,
            name: '포이근린공원',
            address: '서울시 강남구 개포동 218',
            average_review: 4,
        },
        {
            id: 5,
            name: '청수근린공원',
            address: '서울시 강남구 청담동 123-13',
            average_review: 4.5,
        },
    ]

    return (
        <StyledEngineProvider injectFirst>
            <ParkListContainer>
                {parks.map((park, index) => (
                    <List key={index} onClick={() => onParkClick(park.id)}>
                        {' '}
                        {/* 공원 선택 시 공원 id 전달 */}
                        <Stack direction="row" spacing={1.5}>
                            <Number>{index + 1}</Number>
                            <ParkName name={park.name} address={park.address} />
                            <Rating
                                name="half-rating"
                                defaultValue={park.average_review}
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

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

import React from 'react'
import styled from 'styled-components'
import '../../../assets/fonts/font.css'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import {StyledEngineProvider} from '@mui/styled-engine'
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

const ParkList = ({onParkClick, parkData, error}) => {
    console.log('ParkList parkData:', parkData) // 데이터 확인용 로그
    return (
        <StyledEngineProvider injectFirst>
            <ParkListContainer>
                {parkData &&
                    parkData.data &&
                    parkData.data.slice(0, 5).map((park, index) => (
                        <List key={index} onClick={() => onParkClick(park.id)}>
                            <Stack direction="row" spacing={1.5}>
                                <Number>{index + 1}</Number>
                                <ParkName
                                    name={park.name}
                                    address={park.address}
                                />
                                <Rating
                                    name="half-rating"
                                    defaultValue={park.average_review}
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

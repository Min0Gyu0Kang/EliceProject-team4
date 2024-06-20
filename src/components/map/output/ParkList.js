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
2024.06.19  임지영    Modified   공원이 적어도 ParkList 높이 일정하게
*/

import React from 'react'
import styled from 'styled-components'
import '../../../assets/fonts/font.css'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import {StyledEngineProvider} from '@mui/styled-engine'
import ParkName from '../../common/ParkName'
import {useDispatch, useSelector} from 'react-redux'
import {setRatings} from '../../redux/parkSlice'

const ParkListContainer = styled.div`
    font-family: 'Pretendard';
    display: flex;
    flex-direction: column;
    height: 270px;
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
    const dispatch = useDispatch()
    const searchResults = useSelector(state => state.park.searchResults)

    return (
        <StyledEngineProvider injectFirst>
            <ParkListContainer>
                {searchResults &&
                    searchResults.data.slice(0, 5).map((park, index) => (
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
            </ParkListContainer>
        </StyledEngineProvider>
    )
}

export default ParkList

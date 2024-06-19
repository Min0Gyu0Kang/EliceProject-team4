/**
File Name : InfoPark
Description : 공원 정보 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.14  김유림    Created   내주변 공원 컴포넌트
2024.06.14  임지영    Modified  Empty 컨테이너 추가, 스타일 수정
2024.06.15  김유림    Modified  ButtonWrapper 마진 수정
2024.06.16  김유림    Modified  조건부 렌더링 추가, Empty or InfoPark/Button
2024.06.17  김유림    Modified  더미데이터 추가
2024.06.17  김유림    Modified  버튼 margin 수정
2024.06.19  임지영    Modified  더미데이터 삭제, API 연결
2024.06.19  임지영    Modified  Name margin 변경
2024.06.20  임지영    Modified  fetch -> axios
*/

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Keyword from '../../common/Keyword'
import Empty from '../../common/Empty'
import Rating from '@mui/material/Rating'
import InfoList from './InfoList'
import '../../../assets/fonts/font.css'
import Button from './Button'
import axios from 'axios'

const RightSection = styled.div`
    background-color: #ffffff; /* 예제용 배경색 */
    display: flex;
    flex: 1;
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
    width: 950%;
`
const ParkNameContainer = styled.div`
    font-family: 'Pretendard';
    width: 93%;
    display: flex;
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: space-between; /* 자식 요소 간의 공간을 최대화하여 양 끝에 정렬 */
    margin-top: 5px;
`

const Name = styled.div`
    font-size: 15pt;
    margin: 10px 23px;
    align-items: flex-start; /* 수직 상단 정렬 */
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    margin-top: 10px; /* 위쪽 여백 추가 */
`

const InfoPark = ({parkId, onReviewDetailClick, showParkList}) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        if (parkId) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`/park/information/${parkId}`)
                    setData(response.data)
                } catch (err) {
                    console.log(err)
                }
            }

            fetchData()
        }
    }, [parkId])

    if (!parkId) {
        return (
            <ContentWrapper>
                <Keyword text="공원 정보" />
                <Empty text="공원을 선택해주세요" />
            </ContentWrapper>
        )
    }

    if (!data) {
        return (
            <ContentWrapper>
                <Keyword text="공원 정보" />
            </ContentWrapper>
        ) // 데이터를 아직 가져오지 않았을 때 아무 것도 렌더링하지 않음
    }

    const park = data.park.find(p => p.id === parkId)

    let facilities = data.facilities

    if(showParkList){
    return (
        <RightSection>
            <ContentWrapper>
                <Keyword text="공원 정보" />
                <ParkNameContainer>
                    <Name>{park?.name}</Name>
                    <Rating
                        name="half-rating"
                        value={park?.average_review}
                        precision={0.5}
                        readOnly
                    />
                </ParkNameContainer>{' '}
                <InfoList park={park} facilities={facilities} />
                <ButtonWrapper>
                    <Button
                        park={park}
                        parkId={parkId}
                        onReviewDetailClick={onReviewDetailClick}
                    />
                </ButtonWrapper>
            </ContentWrapper>
        </RightSection>
    )
}
}
export default InfoPark

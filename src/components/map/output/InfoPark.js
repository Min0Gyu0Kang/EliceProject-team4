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
*/

import React from 'react'
import styled from 'styled-components'
import Keyword from '../../common/Keyword'
import Empty from '../../common/Empty'
import Rating from '@mui/material/Rating'
import InfoList from './InfoList'
import '../../../assets/fonts/font.css'
import Button from './Button'

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
    width: 100%;
    display: flex;
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: space-between; /* 자식 요소 간의 공간을 최대화하여 양 끝에 정렬 */
`

const Name = styled.div`
    font-size: 15pt;
    margin: 10px 10px;
    align-items: flex-start; /* 수직 상단 정렬 */
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    margin-top: 10px; /* 위쪽 여백 추가 */
`
const information = {
    park: [
        {
            id: 1,
            name: '늘벗공원',
            address: '서울시 강남구 대치동 501',
            average_review: 1,
            type: '어린이공원',
            phone: '02-1234-1234',
        },
        {
            id: 2,
            name: '늘푸른공원',
            address: '서울시 강남구 일원동 690',
            average_review: 2,
            type: '어린이공원',
            phone: '02-1234-1235',
        },
        {
            id: 3,
            name: '신사근린공원',
            address: '서울시 강남구 압구정동 422',
            average_review: 3,
            type: '근린공원',
            phone: '02-1234-1236',
        },
        {
            id: 4,
            name: '포이근린공원',
            address: '서울시 강남구 개포동 218',
            average_review: 4,
            type: '근린공원',
            phone: '02-1234-1237',
        },
        {
            id: 5,
            name: '청수근린공원',
            address: '서울시 강남구 청담동 123-13',
            average_review: 4.5,
            type: '근린공원',
            phone: '02-1234-1237',
        },
    ],

    facilities: [
        {id: 1, category: '운동시설', name: '농구장'},
        [
            {id: 2, category: '운동시설', name: '농구장'},
            {id: 2, category: '편익시설', name: '화장실'},
        ],
        [
            {id: 3, category: '운동시설', name: '농구장'},
            {id: 3, category: '편익시설', name: '화장실'},
        ],
        [
            {id: 4, category: '운동시설', name: '농구장'},
            {id: 4, category: '편익시설', name: '화장실'},
        ],
        [
            {id: 5, category: '운동시설', name: '농구장'},
            {id: 5, category: '편익시설', name: '화장실'},
            {id: 5, category: '유희시설', name: '놀이대'},
        ],
    ],
}

const InfoPark = ({parkId, onReviewDetailClick}) => {
    // parkId를 사용하여 공원 정보를 찾음
    const park = information.park.find(p => p.id === parkId)
    let facilities = []
    information.facilities.forEach(facilityGroup => {
        if (Array.isArray(facilityGroup)) {
            facilities = facilities.concat(
                facilityGroup.filter(f => f.id === parkId),
            )
        } else if (facilityGroup.id === parkId) {
            facilities.push(facilityGroup)
        }
    })
    if (!parkId) {
        ;<ContentWrapper>
            <Keyword text="공원 정보" />
        </ContentWrapper>
    }
    console.log('Facilities:', facilities)
    return (
        <RightSection>
            <ContentWrapper>
                <Keyword text="공원 정보" />
                {!parkId ? (
                    <Empty text="공원을 선택해주세요" />
                ) : (
                    <>
                        <ParkNameContainer>
                            <Name>{park.name}</Name>
                            <Rating
                                name="half-rating"
                                defaultValue={park.average_review}
                                precision={0.5}
                                readOnly
                            />
                        </ParkNameContainer>{' '}
                        <InfoList park={park} facilities={facilities} />
                        <ButtonWrapper>
                            <Button onReviewDetailClick={onReviewDetailClick}>
                                리뷰 상세 보기
                            </Button>
                        </ButtonWrapper>
                    </>
                )}
            </ContentWrapper>
        </RightSection>
    )
}
export default InfoPark

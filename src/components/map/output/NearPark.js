/**
File Name : NearPark
Description : 내 주변 공원 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.14  김유림    Created   내주변 공원 컴포넌트
2024.06.14  임지영    Modified  Empty 컨테이너 추가, 스타일 수정
2024.06.14  김유림    Modified  ContentWrapper 좌우 패딩 10->15 수정
2024.06.14  김유림    Modified  RightSection background-color 변경
2024.06.16  김유림    Modified  onParkClick 함수 추가
2024.06.17  임지영    Modified  공원 검색 샘플 버튼 클릭 이벤트 추가
*/

import React from 'react'
import styled from 'styled-components'
import Keyword from '../../common/Keyword'
import Empty from '../../common/Empty'
import '../../../assets/fonts/font.css'
import ParkList from './ParkList'

const RightSection = styled.div`
    flex: 3; /* 부모의 전체 너비를 차지하도록 함 */
    background-color: #ffffff;
    display: flex;
    flex: 1;
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 15px; /* 좌우 패딩 값 수정 */
    width: 100%;
`
const NearPark = ({onParkClick, showParkList, parkData}) => {
    console.log('NearPark parkData:', parkData) // 데이터 확인용 로그
    return (
        <RightSection>
            <ContentWrapper>
                <Keyword text="내 주변 공원" />
                {showParkList ? (
                    <ParkList parkData={parkData} onParkClick={onParkClick} />
                ) : (
                    <Empty text="공원을 검색해보세요" />
                )}
            </ContentWrapper>
        </RightSection>
    )
}

export default NearPark

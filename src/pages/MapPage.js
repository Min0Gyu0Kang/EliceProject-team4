/**
File Name : MapPage
Description : 지도 레이아웃
Author : 김유림

History
Date        Author   Status    Description
2024.06.14  김유림   Created
2024.06.14  임지영   Modified   RightTop 스타일 수정, 주변 공원 컴포넌트 추가
2024.06.14  김유림   Modified   Right스타일 수정, 공원정보 컴포넌트 추가
2024.06.14  임지영   Modified   LeftTop 모달창 확인용 컴포넌트 추가
2024.06.14  김유림   Modified   Right Section 배경색 변경
2024.06.16  김유림   Modified   main view , reviewDetail view생성
2024.06.17  김유림   Modified   검색 다시 누를경우 공원 정보 창 리셋
2024.06.18  김유림   Modified   리뷰 상세보기 갔다가 검색 다시 누를경우 main 뷰로 전환
2024.06.18  김유림   Modified   리뷰 상세보기 연결
2024.06.18  임지영   Modified   Middle 및 LeftSection 가로폭 수정
2024.06.19  임지영   Modified   추천공원검색 버튼 중복클릭시 검색결과 안 뜨는 오류 해결
*/

import React, {useState} from 'react'
import NearPark from '../components/map/output/NearPark'
import InfoPark from '../components/map/output/InfoPark'
import styled from 'styled-components'
import ReviewDetail from '../components/map/output/ReviewDetail'
import '../assets/fonts/font.css'
import TapContainer from '../components/map/input/TapContainer'
import Map from '../components/map/main/Map'

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%; /* 화면 전체 높이를 차지하도록 설정 */
`

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
`

const LeftSection = styled.div`
    flex: 2.3; /* 왼쪽 섹션이 부모의 1/6을 차지하도록 설정 */
`

const MiddleSection = styled.div`
    flex: 4; /* 가운데 섹션이 부모의 4/6을 차지하도록 설정 */
    background-color: #e0e0e0; /* 예제용 배경색 */
    display: flex;
    justify-content: center;
    align-items: center;
`

const RightSection = styled.div`
    flex: 2.5; /* 오른쪽 섹션이 부모의 2/6을 차지하도록 설정 */
    background-color: #ffffff; /* 예제용 배경색 */
    display: flex;
    flex-direction: column; /* 세로로 요소 배치 설정 */
`

const RightTop = styled.div`
    display: flex;
    margin-left: 5px;
    margin-bottom: 10px;
`

const RightBottom = styled.div`
    display: flex;
    margin: 10px;
    margin-top: 0;
`

const MapPage = () => {
    const [view, setView] = useState('main')
    const [selectedParkId, setSelectedParkId] = useState(null)

    const handleParkClick = parkId => {
        console.log('Selected Park ID:', parkId)
        setSelectedParkId(prevId => (prevId === parkId ? null : parkId)) // 동일한 공원 클릭 시 null로 설정
    }

    const handleReviewDetailClick = () => {
        setView('reviewDetail') /* 리뷰 상세 보기 뷰 상태 업데이트 */
    }

    const handleBackClick = () => {
        setView('main') /*메인 뷰로 돌아가기 뷰 상태 업데이트 */
    }

    const [showParkList, setShowParkList] = useState(false)
    const openParkList = isSearched => {
        isSearched ? setShowParkList(true) : setShowParkList(false) // 추천공원 클릭되었을 땐 true => 내주변공원 보여줌
        setSelectedParkId(null) // 공원 선택 다시 누르면 selectedParkId 초기화 => 공원정보 빔
        setView('main') // 리뷰 상세보기 보다가 공원 검색 버튼을 누르면 view를 다시 'main'으로 설정
    }

    const [searchResults, setSearchResults] = useState(null)

    const handleSearchComplete = data => {
        setSearchResults(data)
        console.log('검색 결과:', data)
    }

    return (
        <MainLayout>
            <ContentWrapper>
                <LeftSection>
                    <TapContainer
                        onSearchComplete={handleSearchComplete} //검색 결과 받아오기
                        // NearPark 내부의 ParkList 컴포넌트를 보여줄지 말지 결정
                        openParkList={openParkList} 
                    />
                </LeftSection>
                <MiddleSection>
                    <Map></Map>
                </MiddleSection>
                <RightSection>
                    {view === 'main' && (
                        <>
                            <RightTop>
                                <NearPark
                                    onParkClick={handleParkClick} // 내주변공원의 공원 클릭시 정보 보이도록
                                    showParkList={showParkList} //true ? 내주변공원 컴포넌트 : empty
                                    parkData={searchResults} // 받아온 검색 결과 전달
                                />
                            </RightTop>
                            <RightBottom>
                                <InfoPark
                                    parkId={selectedParkId}
                                    onReviewDetailClick={
                                        handleReviewDetailClick
                                    }
                                />
                            </RightBottom>
                        </>
                    )}
                    {view === 'reviewDetail' && selectedParkId && (
                        <ReviewDetail
                            parkId={selectedParkId} 
                            onBackClick={handleBackClick} // 뒤로가기 버튼
                        />
                    )}
                </RightSection>
            </ContentWrapper>
        </MainLayout>
    )
}

export default MapPage

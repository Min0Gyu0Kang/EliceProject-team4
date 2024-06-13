/**
File Name : DashBoard
Description : 대시보드 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.10  김유림   Created
2024.06.12  김유림   Modified  컨테이너별 4페이지 초안 생성 
*/
import React from 'react'
import styled from 'styled-components'
import FirstChart from './chart/FirstChart'
import SecondChart from './chart/SecondChart'
import ThirdChart from './chart/ThirdChart'

const DashboardWrapper = styled.div`
    display: flex;
    flex-direction: column; /* 컨테이너들을 세로로 배치 */
    padding: 50px;
    width: 1200px; /* 고정 너비 */
    margin: 0 auto; /* 중앙 정렬 */
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px;
`

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    margin: 30px 0;
`

const LeftSection = styled.div`
    flex: 1;
    width: 600px;
    font-family: 'Pretendard';
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MiddleSection = styled.div`
    flex: 1;
    padding: 100px 0px; /* 패딩 조정 */
    font-size: 16px;
    text-align: center; /* 텍스트를 가운데 정렬 */
    font-family: 'Pretendard';
    width: 450px;
    font-weight: 600;
    display: flex; /* 중앙 정렬을 위해 flex로 설정 */
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
`

const RightSection = styled.div`
    display: flex;
    padding: 150px 0px; /* 패딩 조정 */
    flex-direction: column;
`

const Highlight = styled.span`
    color: #30cb6e;
`

const BackgroundColor = styled.div`
    background-color: #f5f5f5;
`

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <BackgroundColor>
                <Container>
                    <LeftSection>
                        <FirstChart />
                    </LeftSection>
                    <MiddleSection>
                        <p>
                            도시 환경에서 공원과 녹지는 환경적인 측면과
                            <br /> <Highlight>삶의 질 향상</Highlight>에 중요한
                            역할을 해요
                            <br />
                            <br /> 이에 따라 1인당 도시 공원 조성 면적은 매년
                            증가하고 있으며 <br />
                            녹지 환경에 대한 시민의 만족도도 증가하고 있어요
                        </p>
                    </MiddleSection>
                    {/* <RightSection>
                    <Icon src={FirstChartButton} alt="first chart icon" />
                    <Icon src={SecondChartButton} alt="second chart icon" />
                    <Icon src={ThirdChartButton} alt="third chart icon" />
                    <Icon src={InsightButton} alt="insight icon" />
                </RightSection> */}
                </Container>
                <Divider />
                <Container>
                    <MiddleSection>
                        <p>
                            각지역 별 도시공원 조성면적만을 늘린다면
                            <br /> 앞으로의 녹지환경의 만족도를 늘릴 수
                            있을까요?
                            <br />
                            <br />
                            지역별 도시공원 조성 면적과 녹지 환경 만족도 간
                            데이터는 <br />
                            <Highlight>
                                타원형태의 군집화 결과로 연관성이 떨어진다
                            </Highlight>
                            할 수 있어요 <br />
                            <br />
                            따라서 단순히 공원 면적을 늘리는 것보다는
                            <br />
                            <Highlight>공원의 질적 수준을 향상</Highlight>시키는
                            것에 집중해야해요
                        </p>
                    </MiddleSection>
                    <LeftSection>
                        <SecondChart />
                    </LeftSection>
                </Container>
                <Divider />
                <Container>
                    <LeftSection>
                        <ThirdChart />
                    </LeftSection>
                    <MiddleSection>
                        <p>
                            공원의 질적 수준을 높이기 위해 노후화율 데이터에
                            주목하였고 <br />
                            <Highlight>노후화 된 공원을 개선</Highlight> 하는
                            것이 중요하다고 판단했어요 <br /> <br />
                            이를 위해 <br />
                            공원 유지 관리, 공원 정보 제공, 시민의 관심과
                            지자체의 노력이 필요해요
                        </p>
                    </MiddleSection>
                </Container>
                <Divider />
                <Container>
                    <MiddleSection>
                        <p>
                            이에 도시의 오아시스는 '내 주변 공원 추천', '공원
                            정보 제공', '우리 공원 정보 알림' 등의 서비스를
                            제공하여
                            <br />
                            최종적으로{' '}
                            <Highlight>
                                미래 도시공원의 발전 방향을 모색
                            </Highlight>
                            하고 <Highlight>거주 환경을 개선</Highlight>하고자
                            해요 <br />
                            <br />
                            <br />
                            <br />
                            도시의 오아시스는 많은 사람들이 공원에서의 행복을
                            가져가길 바라요
                            <br /> 저희와 더 나은 도시공원과 거주 환경을 위해
                            함께해요!
                        </p>
                    </MiddleSection>
                </Container>
            </BackgroundColor>
        </DashboardWrapper>
    )
}

export default Dashboard
/**
File Name : InfoList
Description : 공원 정보 리스트 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.14  김유림    Created   공원 정보 리스트 컴포넌트
2024.06.15  임지영    Modified  리스트 컨테이너 높이 수정
2024.06.15  김유림    Modified  리스트 컨테이너 높이 수정
*/

import React, {useState} from 'react'
import styled from 'styled-components'
import {StyledEngineProvider} from '@mui/styled-engine'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import LocationIcon from '../../../assets/images/location.svg'
import DivisionIcon from '../../../assets/images/division.svg'
import TelIcon from '../../../assets/images/telephone.svg'
import InformationIcon from '../../../assets/images/information.svg'
import {useInfoData} from '../../common/useInfoData'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const InfoListContainer = styled.div`
    width: 100%;
    max-width: 370px;
    max-height: 330px; /* 리스트 높이 제한 설정 */
    border-radius: 16px;
    background-color: #ffffff; /* 배경색 설정 */
    border: 1px solid #e0e0e0; /* 테두리 설정 */
    overflow-y: scroll; /* 스크롤 항상 활성화 */
    padding: 5px;
    /* 스크롤바 스타일링 */
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #888; /* 스크롤바 색상 */
        border-radius: 16px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background-color: #555; /* 호버 시 색상 */
    }
    &::-webkit-scrollbar-track {
        background-color: #f1f1f1; /* 트랙 색상 */
    }
`

const StyledList = styled(List)`
    padding: 0;
`

const InfoList = () => {
    const [url, setUrl] = useState('')
    const {infoData, error} = useInfoData(url)

    return (
        <StyledEngineProvider injectFirst>
            <Container>
                <InfoListContainer>
                    <StyledList>
                        <ListItem sx={{paddingBottom: 0}}>
                            <ListItemAvatar>
                                <img src={LocationIcon} alt="Location Icon" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="주소"
                                secondary="서울특별시 강남구 대치동 501"
                            />
                        </ListItem>
                        <ListItem sx={{paddingBottom: 0}}>
                            <ListItemAvatar>
                                <img src={DivisionIcon} alt="Division Icon" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="공원구분"
                                secondary="어린이공원"
                            />
                        </ListItem>
                        <ListItem sx={{paddingBottom: 0}}>
                            <ListItemAvatar>
                                <img src={TelIcon} alt="Tel Icon" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="전화번호"
                                secondary="02-1234-1234"
                            />
                        </ListItem>
                        <ListItem sx={{paddingBottom: 0}}>
                            <ListItemAvatar>
                                <img
                                    src={InformationIcon}
                                    alt="Information Icon"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="운동시설"
                                secondary="농구장, 축구장, 테니스장"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <img
                                    src={InformationIcon}
                                    alt="Information Icon"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="편익시설"
                                secondary="블라블라"
                            />
                        </ListItem>
                    </StyledList>
                </InfoListContainer>
            </Container>
        </StyledEngineProvider>
    )
}

export default InfoList

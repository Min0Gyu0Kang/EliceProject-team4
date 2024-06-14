/**
File Name : InfoList
Description : 공원 정보 리스트 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.14  김유림    Created   공원 정보 리스트 컴포넌트
*/

import * as React from 'react'
import styled from 'styled-components'
import '../../../assets/fonts/font.css'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import LocationIcon from '../../../assets/images/location.svg'
import DivisionIcon from '../../../assets/images/division.svg'
import TelIcon from '../../../assets/images/telephone.svg'
import InformationIcon from '../../../assets/images/information.svg'

const Infocontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`
const InfoTextcontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fefbf6;
    border-radius: 20px;
    height: 100%;
    width: 100%;
    border: 1px solid #ccc; /* 테두리 설정 */
    padding: 10px; /* 내부 여백 */
`

const InfoList = () => {
    return (
        <Infocontainer>
            <InfoTextcontainer>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <img src={LocationIcon} alt="Division Icon" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="공원명"
                            secondary="서울특별시 강남구 대치동 501"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <img src={DivisionIcon} alt="Division Icon" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="공원구분"
                            secondary="어린이공원"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <img src={TelIcon} alt="TelI Icon" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="전화번호"
                            secondary="02-1234-1234"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <img src={InformationIcon} alt="Information Icon" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="운동시설"
                            secondary="농구장, 축구장, 테니스장"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar></ListItemAvatar>
                        <ListItemText primary="편익시설" secondary="블라블라" />
                    </ListItem>
                </List>
            </InfoTextcontainer>
        </Infocontainer>
    )
}

export default InfoList

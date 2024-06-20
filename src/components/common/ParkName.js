/**
File Name : ParkName
Description : 공원 이름 및 주소
Author : 임지영

History
Date        Author   Status    Description
2024.06.14  임지영    Created   
2024.06.18  임지영    Modified  공원이름 길 때 잘리는 거 스타일 수정 
*/

import React from 'react'
import styled from 'styled-components'
import '../../assets/fonts/font.css'

const ParkNameContainer = styled.div`
    font-family: 'Pretendard';
    padding-right: 5%;
    width: 60%;
`

const Name = styled.div`
    font-size: 15pt;
`

const Address = styled.div`
    font-size: 8.5pt;
    opacity: 0.7;
`

const ParkName = ({name, address}) => {
    return (
        <ParkNameContainer>
            <Name>{name}</Name>
            <Address>{address}</Address>
        </ParkNameContainer>
    )
}

export default ParkName

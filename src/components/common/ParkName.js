/**
File Name : ParkName
Description : 공원 이름 및 주소
Author : 임지영

History
Date        Author   Status    Description
2024.06.14  임지영    Created   
*/

import React from 'react'
import styled from 'styled-components'
import '../../assets/fonts/font.css'

const ParkNameContainer = styled.div`
    font-family: 'Pretendard';
    padding-right: 15%;
    width: 40%;
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

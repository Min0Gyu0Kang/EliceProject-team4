/**
File Name : DirectSearch.js
Description : 직접검색 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.11  강민규   Created   LocationSearch 기반
2024.06.11  강민규   Modified  MUI 추가
2024.06.13  강민규   Modified  svg 추가
2024.06.17  강민규   Modified  script 추가, 그러나 Result 창이 오른쪽이 아닌 이곳에 뜸!
2024.06.17  강민규   Modified  handleClear 작동 확인
2024.06.17  강민규   Modified  handleInputChange 작동 확인
2024.06.17  임지영   Modified  버튼 및 전체 스타일 수정
2024.06.18  임지영   Modified  버튼 및 전체 스타일 수정
*/

import React from 'react'
import styled from 'styled-components'
import Keyword from '../../common/Keyword'
import Box from '@mui/material/Box'
import {TextField, Stack} from '@mui/material'
import IconSearch1 from '../../../assets/images/IconSearch1.svg'
import {useDispatch, useSelector} from 'react-redux'
import {setName} from '../../redux/parkSlice'

const Container = styled.div``

const StyledTextField = styled(TextField)`
    & .MuiOutlinedInput-root {
        height: 40px;
        & fieldset {
            border-radius: 15px;
        }
    }
    & .MuiOutlinedInput-input {
        text-align: center;
    }
    & .MuiInputLabel-root {
        transition: font-size 0.3s ease;
        font-size: 1rem;
        @media (max-width: 600px) {
            font-size: 0.75rem;
        }
        @media (min-width: 601px) and (max-width: 991px) {
            font-size: 0.875rem;
        }
        @media (min-width: 992px) {
            font-size: 1rem;
        }
    }
`

function DirectSearch() {
    const dispatch = useDispatch()
    const name = useSelector(state => state.park.name)

    const handleChange = event => {
        dispatch(setName(event.target.value))
    }

    return (
        <Container>
            <Keyword text="이름 검색" />
            <Box sx={{padding: '10px 0'}} />
            <Box component="form" noValidate autoComplete="off">
                <Stack direction="row" spacing={1}>
                    <StyledTextField
                        id="outlined-basic"
                        placeholder="공원 이름을 검색해보세요"
                        variant="outlined"
                        value={name}
                        onChange={handleChange}
                        InputProps={{
                            sx: {
                                height: '40px',
                                padding: '0 50px',
                                marginLeft: '10px',
                            },
                        }}
                        InputLabelProps={{
                            shrink: false,
                            sx: {
                                display: 'none',
                            },
                        }}
                    />
                    <img src={IconSearch1} alt="Search" height="40px" />
                </Stack>
            </Box>
            {/* <Result value={resultValue} /> */}
            <div style={{height: '563.5px'}}></div>
        </Container>
    )
}

export default DirectSearch

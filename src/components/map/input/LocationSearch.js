/**
File Name : LocationSearch.js
Description : 지역 검색 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.11  강민규   Created   App에서 분리
2024.06.11  강민규   Modified  MUI 추가
2024.06.13  강민규   Modified  svg 추가
2024.06.17  강민규   Modified  script 추가, 그러나 Result 창이 오른쪽이 아닌 이곳에 뜸!
2024.06.17  강민규   Modified  handleClear 작동 확인
2024.06.17  강민규   Modified  CSS 정리
2024.06.17  임지영   Modified  버튼 및 전체 스타일 수정
2024.06.18  임지영     Done    지역 검색 완료
*/

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import '../../../assets/fonts/font.css'
import Keyword from '../../common/Keyword'
import {Box, MenuItem, FormControl, Select, Chip, Stack} from '@mui/material'
import {useParkData} from '../../common/useParkData'

const Container = styled.div`
    font-family: 'Pretendard';
`

const SetLocation = styled.div`
    margin-bottom: 60px;
`

const StyledBox = styled(Box)`
    border-radius: 30px 0px 0px 30px;
    margin-bottom: 20px;
`

const SubText = styled.div`
    color: #262627;
    margin-left: 10px;
    font-size: 10pt;
`

const Search = styled.div`
    margin-top: 15px;
`

const Text = styled.text`
    color: #7f7777;
`

const StyledChip = styled(Chip)`
    border-radius: 30px;
    border-style: solid;
    border-width: 1px;
    background-color: #7f7777;
    font-weight: 500;
    background-color: #7f7777;
    color: #c7d1cb;
    &.Mui-selected {
        background-color: #30cb6e;
        color: #fff;
    }
`

const LocationSearch = ({
    selectedValues,
    setSelectedValues,
    onClearSelection,
}) => {
    // 시/도 데이터 불러오기
    const {parkData: cityData, error: cityError} = useParkData(
        '/park/recommend/city',
    )
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [districtOptions, setDistrictOptions] = useState([])

    // 시/군/구 데이터 불러오기
    const {parkData: districtData, error: districtError} = useParkData(
        city ? `/park/recommend/city/${city}` : null,
    )

    // 시/도 라벨 생성
    const createCityLabels = data => {
        if (!data || data.length === 0) return []
        const citySet = new Set(data.map(park => park.city))
        return Array.from(citySet).map(city => ({label: city}))
    }

    // 시/군/구 라벨 생성
    const createDistrictLabels = data => {
        if (!data || data.length === 0) return []
        const districtSet = new Set(data.map(park => park.district))
        return Array.from(districtSet).map(district => ({label: district}))
    }

    // 시/도 리스트
    const cities = createCityLabels(cityData)

    // 시/도 선택 시 시/군/구 리스트 업데이트
    useEffect(() => {
        if (city) {
            setDistrictOptions(createDistrictLabels(districtData))
        } else {
            setDistrictOptions([])
        }
    }, [city, districtData])

    // MenuProps 설정
    const menuProps = {
        PaperProps: {
            style: {
                maxHeight: 48 * 6.5, // 아이템의 높이 * 원하는 최대 아이템 수 + 약간의 여유
            },
        },
    }

    // 시설 태그
    const chips = [
        {label: '운동시설'},
        {label: '유희시설'},
        {label: '기타시설'},
        {label: '편익시설'},
    ]

    // 칩 스크립트
    const [selectedChips, setSelectedChips] = useState([])

    const handleChipClick = chipLabel => {
        if (selectedChips.includes(chipLabel)) {
            setSelectedChips(selectedChips.filter(chip => chip !== chipLabel))
        } else if (selectedChips.length < 4) {
            setSelectedChips([...selectedChips, chipLabel])
        }
    }

    // 선택된 city, district, selectedChips 값을 selectedValues에 저장
    useEffect(() => {
        setSelectedValues(prev => ({
            ...prev,
            city,
            district,
            selectedChips,
        }))
    }, [city, district, selectedChips, setSelectedValues])

    return (
        <Container>
            <SetLocation>
                <Keyword text="지역 설정" />
                <Search>
                    <StyledBox>
                        <SubText> 시 / 도 </SubText>
                        <FormControl sx={{width: '85%'}}>
                            <Select
                                sx={{
                                    height: 40,
                                    borderRadius: '15px',
                                }}
                                labelId="selectCity"
                                id="selectCity"
                                onChange={e => setCity(e.target.value)}
                                value={city}
                                displayEmpty
                                MenuProps={menuProps}
                            >
                                <MenuItem value="">
                                    <Text>선택</Text>
                                </MenuItem>
                                {/* 실제 시 / 도 */}
                                {cities.map((cityOption, index) => (
                                    <MenuItem
                                        key={index}
                                        value={cityOption.label}
                                    >
                                        {cityOption.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </StyledBox>

                    <StyledBox>
                        <SubText>시 / 군 / 구</SubText>
                        <FormControl sx={{width: '85%'}}>
                            <Select
                                sx={{
                                    height: 40,
                                    borderRadius: '15px',
                                }}
                                labelId="selectDistrict"
                                id="selectDistrict"
                                value={district}
                                onChange={e => setDistrict(e.target.value)}
                                displayEmpty
                                MenuProps={menuProps}
                            >
                                <MenuItem value="">
                                    <Text>선택</Text>
                                </MenuItem>
                                {districtOptions.map(
                                    (districtOption, index) => (
                                        <MenuItem
                                            key={index}
                                            value={districtOption.label}
                                        >
                                            {districtOption.label}
                                        </MenuItem>
                                    ),
                                )}
                            </Select>
                        </FormControl>
                    </StyledBox>
                </Search>
            </SetLocation>

            <Keyword text="추천 태그" />
            <Search>
                <Stack
                    direction="row"
                    spacing={2.5}
                    alignItems="center"
                    justifyContent="center"
                >
                    {chips.map((chip, index) => (
                        <StyledChip
                            key={index}
                            label={chip.label}
                            variant={
                                selectedChips.includes(chip.label)
                                    ? 'outlined'
                                    : 'default'
                            }
                            value={2}
                            onClick={() => handleChipClick(chip.label)}
                            sx={{
                                width: '25%',
                                height: 35,
                                borderRadius: 30,
                                fontSize: '10pt',
                                // 선택시 색상 변경
                                backgroundColor: selectedChips.includes(
                                    chip.label,
                                )
                                    ? '#30cb6e'
                                    : '#EAEAEA',
                                color: selectedChips.includes(chip.label)
                                    ? '#ffffff'
                                    : '#000',
                            }}
                        />
                    ))}
                </Stack>
            </Search>
            {/* <Result value={ResultValue} /> */}
            <div style={{height: '335px'}}></div>
        </Container>
    )
}

export default LocationSearch

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
2024.06.19  강민규   Modified  selectedChip as facilities

*/

import React, {useState} from "react";
import styled from "styled-components";
import '../../../../../assets/fonts/font.css';

import {Box, InputLabel,MenuItem,FormControl,Select,Chip,Stack} from '@mui/material';

// svg에 필요한 파일
import {ReactComponent as DownArrow1} from "../../../../../assets/left/DownArrow1.svg";

//DetailInfo 대신 Result (임시)
import Result from "../../../output/Right/Result"

const Container = styled.div`
  border-radius: 15px;
  background-color: rgba(244, 244, 244, 0.45);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 1px 0 28px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Title = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #262627;
  text-overflow: ellipsis;
  align-self: start;
  margin-left: 13px;
  font-size: 10pt;
  font-family:'PretendardBold';
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const StyledBox = styled(Box)`
  border-radius:30px 0px 0px 30px;
`

const SubText = styled.div`
  color: #262627;
  margin: 5px 0 0 48px;
  font-size: 10pt;
  font-family:'PretendardBold';
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const StyledChip = styled(Chip)`
  justify-content: center;
  border-radius: 30px;
  border-style: solid;
  border-width: 1px;
  background-color: #7f7777;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  flex: 1;
  font-family: Pretendard, sans-serif;
  padding: 8px 22px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
  background-color: #7f7777;
  color: #c7d1cb;
  &.Mui-selected {
    background-color: #30cb6e;
    color: #fff;
    }
`;

function LocationSearch() {
  /**  입력 스크립트 */
  const [ResultValue, setResultValue] = useState('');
// 지역 설정 선택창
  // 시 / 도
  const [city, setCity] = React.useState('');

  const cities = [
    { label: '서울특별시' },
    { label: '부산광역시' },
    { label: '대구광역시' },
    { label: '인천광역시' }
  ];

  // 시 / 군 / 구
  const [district, setDistrict] = React.useState('');
  
  const districts = [
    { label: '강남구' },
    { label: '달서구' },
    { label: '구로구' },
    { label: '노원구' }
  ];

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  // 시설 태그
  const [selectedChip, setSelectedChip] = useState(null);

  const chips = [
    { label: '운동시설' },
    { label: '유희시설' },
    { label: '기타시설' },
    { label: '편의시설' }
  ];

  const handleClick = (index) => {
    setSelectedChip(chips[index].label); // 선택된 Chip의 라벨을 저장
  };

  // 칩 스크립트
  
  const handleClear = (event) => {
    setResultValue('');
    setCity('');
    setDistrict('');
    setSelectedChip(null);
  };
  const handleInputChange = () => {
    var facilities = selectedChip; //selectedChip to facilities
    setResultValue(`Park Entered:
  시/도: ${city},
  시/군/구: ${district},
  시설: ${facilities} 
  `);
  };
  return (
<Container>
      <Title>지역 설정</Title>
      <StyledBox sx={{ minWidth: 100 }}>
      <SubText> 시 / 도 </SubText>
      <FormControl fullWidth>
        <InputLabel id="selectCity">선택하기</InputLabel>
        <Select
          sx={{
            width:200,
            height:40,
            borderRadius: '15px', 
            fontSize: 10,
            fontFamily:'Pretendard,Bold',
          }}
          labelId="selectCity"
          id="selectCity"
          value={city}
          label="City"
          onChange={handleCityChange}
        >
          {/* 실제 시 / 도 */}
          {cities.map((cityOption, index) => (
          <MenuItem key={index} value={cityOption.label}>
            {cityOption.label}
          </MenuItem>))}
          </Select>
      </FormControl>
      </StyledBox>
      <SubText>시 / 군 / 구</SubText>
      <StyledBox>
      <FormControl fullWidth>
        <InputLabel id="selectDistrict">선택하기</InputLabel>
        <Select
          sx={{
            width:200,
            height:40,
            borderRadius: '15px', 
            fontSize: 10,
            fontFamily:'Pretendard,Bold',
          }}
          labelId="selectDistrict"
          id="selectDistrict"
          value={district}
          label="District"
          onChange={handleDistrictChange}
        >
          {/* 실제 시 / 군 / 구 */}
          {districts.map((districtOption, index) => (
          <MenuItem key={index} value={districtOption.label}>
            {districtOption.label}
          </MenuItem>))}
          </Select>
      </FormControl>
    </StyledBox>
      <br/>
      <Title>추천 태그</Title>
      <br/>
      <Stack direction="row" spacing={2.5} justifyContent={"left"}>
      {chips.map((chip, index) => (
      <StyledChip key={index} label={chip.label} variant={selectedChip === chip.label ? 'outlined' : 'default'} value={2} onClick={() => handleClick(index)} 
      sx={{
        width:70,
        height:30,
        borderRadius:30,
        fontSize: '10',
        fontFamily:'Pretendard,Bold',
        // change color when chip is selected
        backgroundColor: selectedChip === chip.label ? '#30cb6e' : '#DFDFDF',
        color: selectedChip === chip.label ? '#ffffff' : '#000',
      }} />
      ))}
      </Stack>
      <br/>
      <br/>
      <br/>
      <Stack direction="row" spacing={1} justifyContent={"left"}>
      <StyledChip label="선택 초기화" variant="outlined" onClick={handleClear}
      sx={{
        width:100,
        height:30,
        borderRadius:30,
        fontSize: 'inherit-10',
        fontFamily:'Pretendard,Bold',
        color:'#000',
        backgroundColor:'#DFDFDF',
      }}
      />
      <StyledChip label="추천 공원 검색" variant="outlined" onClick={handleInputChange} 
      sx={{
        width:100,
        height:30,
        borderRadius:30,
        fontSize: 'inherit',
        fontFamily:'Pretendard,Bold',
        color:'#ffffff',
        backgroundColor:'#30cb6e',
      }}
      />
      </Stack>
      <Result value = {ResultValue} />
  </Container>
  );
}


export default LocationSearch;
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
2024.06.17  강민규   Modified  

*/

import React, {useState} from "react";
import styled from "styled-components";
import '../../../../../assets/fonts/font.css';

import {Box, InputLabel,MenuItem,FormControl,Select,Chip,Stack} from '@mui/material';

// svg에 필요한 파일
import {ReactComponent as DownArrow1} from "../../../../../assets/left/DownArrow1.svg";

//DetailInfo 대신 Result (임시)
import Result from "../../../output/Right/Result"

const Div11 = styled.div`
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

const Div18 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #262627;
  text-overflow: ellipsis;
  align-self: start;
  margin-left: 13px;
  font: 400 36px/213% Aguafina Script, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Div19 = styled.div`
  color: #262627;
  align-self: start;
  margin: 26px 0 0 48px;
  font: 400 16px/213% Aguafina Script, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Div20 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color: #262627;
  font-weight: 400;
  white-space: nowrap;
  line-height: 213%;
  justify-content: center;
  margin: 0 19px;
  @media (max-width: 991px) {
    white-space: initial;
    margin: 0 10px;
  }
`;

const StyledBox = styled(Box)`
  border-radius:30px 0px 0px 30px;
`

const Div23 = styled.div`
  color: #262627;
  align-self: start;
  margin: 13px 0 0 48px;
  font: 400 16px/213% Aguafina Script, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Div24 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color: #262627;
  font-weight: 400;
  white-space: nowrap;
  line-height: 213%;
  justify-content: center;
  margin: 0 19px;
  @media (max-width: 991px) {
    white-space: initial;
    margin: 0 10px;
  }
`;

const Div27 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #262627;
  text-overflow: ellipsis;
  align-self: start;
  margin: 78px 0 0 13px;
  font: 400 36px/213% Aguafina Script, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 53%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div42 = styled.div`
  display: flex;
  margin-top: 333px;
  gap: 20px;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.46px;
  line-height: 130%;
  @media (max-width: 991px) {
    margin-top: 40px;
    flex-wrap: wrap;
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
  const [state, setState] = React.useState('');
  
  const states = [
    { label: '강남구' },
    { label: '달서구' },
    { label: '구로구' },
    { label: '노원구' }
  ];

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
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
    setState('');
    setSelectedChip(null);
  };
  const handleInputChange = () => {
    setResultValue(`Park Entered:
  시/도: ${city},
  시/군/구: ${state},
  시설: ${selectedChip}
  `);
  };
  return (
<Div11>
      <Div18>지역 설정</Div18>
      <Div19>
        시 / 도
      </Div19>
      <Div20>
      <StyledBox sx={{ minWidth: 400 }}>
      <FormControl fullWidth>
        <InputLabel id="selectCity">선택하기</InputLabel>
        <Select
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
      </Div20>
      <Div23>
        시 / 군 / 구
      </Div23>
      <Div24>
      <StyledBox sx={{ minWidth: 400 }}>
      <FormControl fullWidth>
        <InputLabel id="selectState">선택하기</InputLabel>
        <Select
          labelId="selectState"
          id="selectState"
          value={state}
          label="State"
          onChange={handleStateChange}
        >
          {/* 실제 시 / 군 / 구 */}
          {states.map((stateOption, index) => (
          <MenuItem key={index} value={stateOption.label}>
            {stateOption.label}
          </MenuItem>))}
          </Select>
      </FormControl>
    </StyledBox>
      </Div24>
      <Div27>추천 태그</Div27>
      <Column2>
      </Column2>
      <Stack direction="row" spacing={1}>
      {chips.map((chip, index) => (
      <StyledChip key={index} label={chip.label} variant={selectedChip === chip.label ? 'outlined' : 'default'} value={2} onClick={() => handleClick(index)} />
      ))}
      </Stack>
      <Column2>
      <Div42>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Stack direction="row" spacing={1}>
      <StyledChip label="선택 초기화" variant="outlined" onClick={handleClear} />
      <StyledChip label="추천 공원 검색" variant="outlined" onClick={handleInputChange} />
      </Stack>
      </Div42>
      </Column2>
      <Result value = {ResultValue} />
  </Div11>
  );
}


export default LocationSearch;
/**
File Name : LocationSearch.js
Description : 지역 검색 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.11  강민규   Created   App에서 분리
2024.06.11  강민규   Modified  MUI 추가
2024.06.13  강민규   Modified  svg 추가

*/

import * as React from "react";
import styled from "styled-components";
import '../../../../assets/fonts/font.css';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// svg에 필요한 파일
import {ReactComponent as DownArrow1} from "../../../../assets/left/DownArrow1.svg";

function LocationSearch() {
  const [value, setValue] = React.useState('one');
  
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');


// 지역 설정 선택창
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  // 시설 태그
  const handleClick = () => {
    console.info('You clicked the Chip.');
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
          <MenuItem value={10}>서울특별시</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </StyledBox>
        {/* <Div21> */}
          {/* <Div22>선택 </Div22> */}
          {/* <Img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
          /> */}
          {/* Selection Drop Arrow */}
          {/* <DownArrow1 /> */}
        {/* </Div21> */}
      </Div20>
      <Div23>
        시 / 군 / 구
        {/* <span style="font-family: Acme, sans-serif;">
          /군/구
        </span> */}
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
          <MenuItem value={10}>강남구</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </StyledBox>
        {/* <Div25> */}
          {/* <Div26>선택</Div26> */}
          {/* <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
          /> */}
          {/* Selection Drop Arrow */}
          {/* <DownArrow1 /> */}
        {/* </Div25> */}
      </Div24>
      <Div27>추천 태그</Div27>
      <Column2>
      </Column2>
      <Stack direction="row" spacing={1}>
      <StyledChip label="운동시설" onClick={handleClick} />
      <StyledChip label="유희시설" variant="outlined" onClick={handleClick} />
      <StyledChip label="기타시설" variant="outlined" onClick={handleClick} />
      <StyledChip label="편의시설" variant="outlined" onClick={handleClick} />
    </Stack>
      <Div28>
        <Div29>
          {/* <Column2>
            <Div30>
              <Div31>
                <Div32>
                  <Div33>운동시설</Div33>
                </Div32>
                <Div34>
                  <Div35>유희시설</Div35>
                </Div34>
              </Div31>
            </Div30>
          </Column2>
          <Column3>
            <Div38>
              <Div39>기타시설</Div39>
            </Div38>
          </Column3>
          <Column4>
            <Div40>
              <Div41>편의시설</Div41>
            </Div40>
          </Column4> */}
        </Div29>
      </Div28>
      <Column2>
      <Div42>
      <Stack direction="row" spacing={1}>
      <StyledChip label="선택 초기화" variant="outlined" onClick={handleClick} />
      <StyledChip label="추천 공원 검색" variant="outlined" onClick={handleClick} />
      </Stack>
        {/* <Div43>
          <Div44>선택 초기화</Div44>
        </Div43>
        <Div45>
          <Div46>추천 공원 검색</Div46>
        </Div45> */}
      </Div42>
      </Column2>
  </Div11>
  );
}

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



const Div17 = styled.div`
  display: flex;
  margin-top: 54px;
  flex-direction: column;
  padding: 0 35px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
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

const Div21 = styled.div`
  border-radius: 30px;
  border-color: rgba(0, 0, 0, 0.42);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 15px 26px;
  @media (max-width: 991px) {
    padding-left: 20px;
    white-space: initial;
  }
`;

const Div22 = styled.div`
  font-family: Aguafina Script, sans-serif;
  margin: auto 0;
`;

const Img = styled.img`
  aspect-ratio: 0.93;
  object-fit: auto;
  object-position: center;
  width: 25px;
`;

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

const Div25 = styled.div`
  border-radius: 30px;
  border-color: rgba(0, 0, 0, 0.42);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 15px 26px;
  @media (max-width: 991px) {
    padding-left: 20px;
    white-space: initial;
  }
`;

const Div26 = styled.div`
  font-family: Aguafina Script, sans-serif;
  margin: auto 0;
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

const Div28 = styled.div`
  margin-top: 29px;
  padding: 0 1px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div29 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
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

const Div30 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.46px;
  line-height: 162.5%;
  @media (max-width: 991px) {
    margin-top: 27px;
    white-space: initial;
  }
`;

const Div31 = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div32 = styled.div`
  justify-content: center;
  border-radius: 30px;
  background-color: #30cb6e;
  display: flex;
  flex-direction: column;
  color: #fff;
  flex: 1;
  padding: 8px 17px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div33 = styled.div`
  font-family: Pretendard, sans-serif;
  justify-content: center;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div34 = styled.div`
  justify-content: center;
  border-radius: 30px;
  border-color: rgba(0, 0, 0, 0.42);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  color: #262627;
  flex: 1;
  padding: 8px 17px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div35 = styled.div`
  font-family: Pretendard, sans-serif;
  justify-content: center;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div36 = styled.div`
  justify-content: center;
  border-radius: 30px;
  border-color: rgba(0, 0, 0, 0.42);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  margin-top: 18px;
  flex-direction: column;
  color: #262627;
  padding: 8px 17px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div37 = styled.div`
  font-family: Pretendard, sans-serif;
  justify-content: center;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 23%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div38 = styled.div`
  justify-content: center;
  border-radius: 30px;
  border-color: rgba(0, 0, 0, 0.42);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #262627;
  font-weight: 400;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.46px;
  line-height: 162.5%;
  width: 100%;
  padding: 8px 17px;
  @media (max-width: 991px) {
    margin-top: 27px;
    white-space: initial;
  }
`;

const Div39 = styled.div`
  font-family: Pretendard, sans-serif;
  justify-content: center;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 23%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div40 = styled.div`
  justify-content: center;
  border-radius: 30px;
  border-color: rgba(0, 0, 0, 0.42);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #262627;
  font-weight: 400;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.46px;
  line-height: 162.5%;
  width: 100%;
  padding: 8px 17px;
  @media (max-width: 991px) {
    margin-top: 27px;
    white-space: initial;
  }
`;

const Div41 = styled.div`
  font-family: Pretendard, sans-serif;
  justify-content: center;
  @media (max-width: 991px) {
    white-space: initial;
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

export default LocationSearch;
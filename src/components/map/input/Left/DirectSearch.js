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

*/

import React, {useState} from "react";
import styled from "styled-components";

import Box from '@mui/material/Box';
import {TextField, Stack , Chip} from '@mui/material';

// svg에 필요한 파일
import IconSearch1 from "../../../../assets/left/IconSearch1.svg";

//DetailInfo 대신 Result (임시)
import Result from "../../output/Right/Result"

function DirectSearch() {
  // 입력 스크립트
  const [TextFieldValue, setTextFieldValue] = useState('');
  const [resultValue, setResultValue] = useState('');

  
  // 칩 스크립트
  const handleClear = (event) => {
    setTextFieldValue('');
    setResultValue('');
  };
  const handleInputChange = () => {
    setResultValue(`
    Park Entered: ${TextFieldValue}
    `);
  };
  return (
    <Div11>
        <Div17>이름 검색</Div17>
        <Div18>
        <Box
        component="form"
        sx={{ minWidth: 400 }}
        noValidate
        autoComplete="off"
      >
        <Stack direction="row" spacing={1}>
        <TextField id="outlined-basic" label="공원 이름을 검색해보세요" variant="outlined"
        value={TextFieldValue}
        onChange={(e) => setTextFieldValue(e.target.value)}/>
        <img src={IconSearch1} alt="Search" height='45px' />
        </Stack>
        </Box>
            {/* 공원 이름을 검색해보세요 */}  
        </Div18>
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
        <Result value={resultValue} />
    </Div11>
  );
}

const Div11 = styled.div`
  border-radius: 15px;
  background-color: rgba(244, 244, 244, 0.45);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  line-height: 213%;
  width: 100%;
  padding: 1px 14px 80px 7px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div17 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #262627;
  text-overflow: ellipsis;
  align-self: start;
  margin: 53px 0 0 45px;
  font: 400 36px Aguafina Script, sans-serif;
  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
  }
`;

const Div18 = styled.div`
  align-self: center;
  display: flex;
  margin-top: 28px;
  width: 406px;
  max-width: 100%;
  flex-direction: column;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
  justify-content: center;
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

export default DirectSearch;
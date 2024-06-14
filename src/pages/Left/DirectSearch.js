/**
File Name : DirectSearch.js
Description : 직접검색 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.11  강민규   Created   LocationSearch 기반
2024.06.11  강민규   Modified  MUI 추가
2024.06.13  강민규   Modified  svg 추가
*/

import * as React from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

// svg에 필요한 파일
import IconSearch1 from "../../assets/left/IconSearch1.svg";

function DirectSearch() {
  return (
    <Div11>
        <Div17>이름 검색</Div17>
        <Div18>
        <Div19>
        <Stack direction="row" spacing={1}>
        <Div20>
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder="공원 이름을 검색해보세요"/>
        </Box>
            {/* 공원 이름을 검색해보세요 */}
            <img src={IconSearch1} alt="Search" />
            </Div20>
            </Stack>
            {/* <Img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b38be4098674daca7628e7ba68f38ff9f12052c438610abcf47f65385de99bd7?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b38be4098674daca7628e7ba68f38ff9f12052c438610abcf47f65385de99bd7?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b38be4098674daca7628e7ba68f38ff9f12052c438610abcf47f65385de99bd7?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b38be4098674daca7628e7ba68f38ff9f12052c438610abcf47f65385de99bd7?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b38be4098674daca7628e7ba68f38ff9f12052c438610abcf47f65385de99bd7?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b38be4098674daca7628e7ba68f38ff9f12052c438610abcf47f65385de99bd7?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b38be4098674daca7628e7ba68f38ff9f12052c438610abcf47f65385de99bd7?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b38be4098674daca7628e7ba68f38ff9f12052c438610abcf47f65385de99bd7?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
            /> */}
            
        </Div19>
        </Div18>
    </Div11>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 27%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

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

const Div12 = styled.div`
  display: flex;
  gap: 0px;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.46px;
  line-height: 144%;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div13 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px 0px 10px;
  background-color: #c7d1cb;
  display: flex;
  color: #7f7777;
  font-weight: 400;
  flex: 1;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
  padding: 8px 22px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div14 = styled.div`
  font-family: Pretendard, sans-serif;
  justify-content: center;
`;

const Div15 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 0px 10px 10px 0px;
  background-color: #30cb6e;
  display: flex;
  color: #fff;
  font-weight: 500;
  flex: 1;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
  padding: 8px 22px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div16 = styled.div`
  font-family: Pretendard, sans-serif;
  justify-content: center;
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

const Div19 = styled.div`
  border-radius: 30px;
  border-color: rgba(0, 0, 0, 0.42);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  gap: 20px;
  padding: 12px 26px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const Div20 = styled.div`
  font-family: Aguafina Script, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const Img = styled.img`
  aspect-ratio: 1.03;
  object-fit: auto;
  object-position: center;
  width: 34px;
`;





export default DirectSearch;
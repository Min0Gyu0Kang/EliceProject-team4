/**
File Name : DetailInfo.js
Description : 검색한 결과 및 리뷰 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.11  강민규   Created   App에서 분리
2024.06.11  강민규   Modified  
2024.06.13  강민규   Modified  MUI 추가
2024.06.13  강민규   Modified  svg 추가
*/

import * as React from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// svg에 필요한 파일
import ColorWheel1 from "../../../../assets/right/ColorWheel1.svg";
import IconStar from "../../../../assets/right/IconStar.svg";
import Information1 from "../../../../assets/right/Information1.svg";
import ReviewInfoMap1 from "../../../../assets/right/ReviewInfoMap1.svg";
import Telephone1 from "../../../../assets/right/Telephone1.svg";

// 상세 리뷰 창 시에만 사용
import LeftArrow1 from "../../../../assets/right/LeftArrow1.svg"; 

const Content = styled.div`
  border-radius: 15px;
  background-color: rgba(244, 244, 244, 0.45);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding: 37px 44px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Top = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #262627;
  text-overflow: ellipsis;
  font: 70 30px Gmarket Sans TTF, sans-serif;
  font-weight: 400;
  align-self: stretch;
    sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
  font-weight: 400;
  font: 50 50px Gmarket Sans TTF, sans-serif;
  justify-content: space-between;
  margin: 38px 0 0 13px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Subtitle = styled.div`
  color: #262627;
  font: 30 20px Gmarket Sans TTF, sans-serif;
  font-weight: 400;
`;

const Number = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
`;

const Text = styled.div`
  color: #262627;
  font: 10px Aguafina Script, sans-serif;
`;

const Bottom = styled.div`
  color: #000;
  margin-top: 10px;
  font: 70 30px Gmarket Sans TTF, sans-serif;
  font-weight: 400;
`;

// 실제 DB 검색 결과를 반환해야 함.
function DetailInfo() {
  // 하단 버튼
  // 별점
  const [value, setValue] = React.useState(2);
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
    return (
  <Content>
    <Top>내 주변 공원</Top>
    <Stack direction="row" spacing={1}>
      <Number>1</Number>
        <Subtitle>늘벗공원</Subtitle>
        </Stack>
        <Text>
          서울특별시 강남구 대치동{" "}
          <span>
            501
          </span>
        </Text>
      {/* 별 5개*/}
      <Rating
        name="read-only"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Stack direction="row" spacing={1}>
      <img src={IconStar} alt="IconStar" style={{ width: '10%', height: '10%'}} />
      </Stack>
      <Stack direction="row" spacing={1}>
      <Number>2</Number>
        <Subtitle>늘푸른공원</Subtitle>
      </Stack>
        <Text>
          서울특별시 강남구 일원동{" "}
          <span>
            690
          </span>
        </Text>
      {/* 별 5개*/}
      <Rating
        name="read-only"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Stack direction="row" spacing={1}>
      <img src={IconStar} alt="IconStar" style={{width: '10%', height: '10%'}} />
      </Stack>
      <Stack direction="row" spacing={1}>
      <Number>3</Number>
        <Subtitle>신사근린공원</Subtitle>
      </Stack>
        <Text>
          서울특별시 강남구 압구정동{" "}
          <span>
            422
          </span>
        </Text>
      {/* 별 5개*/}
      <Rating
        name="read-only"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Stack direction="row" spacing={1}>
      <img src={IconStar} alt="IconStar" style={{ width: '10%', height: '10%'}} />
      </Stack>
      <Stack direction="row" spacing={1}>
      <Number>4</Number>
          <Subtitle>포이근린공원</Subtitle>
      </Stack>
          <Text>
            서울특별시 강남구 개포동
            <span>
              {" "}
              1239-21
            </span>
          </Text>
        {/* 별 5개*/}
        <Rating
        name="read-only"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        />
        <Stack direction="row" spacing={1}>
      <img src={IconStar} alt="IconStar" style={{ width: '10%', height: '10%'}} />
      </Stack>
      <Stack direction="row" spacing={1}>
      <Number>5</Number>
          <Subtitle>청수근린공원</Subtitle>
      </Stack>
          <Text>
            서울특별시 강남구 청담동{" "}
            <span>
              134-13
            </span>
          </Text>
        {/* 별 5개*/}
        <Rating
        name="read-only"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        />
        <Stack direction="row" spacing={1}>
      <img src={IconStar} alt="IconStar" style={{ width: '10%', height: '10%'}} />
      </Stack>
        <Bottom>공원 정보</Bottom>
        <Stack direction="row" spacing={1}>
          늘벗공원 (10)
        <Rating
          name="read-only"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <img src={IconStar} alt="IconStar" style={{ width: '10%', height: '10%'}} />
        </Stack>  
      
      {/* 별 5개*/}=
        {/* ReviewInfoMap */}
        <img src={ReviewInfoMap1} alt="ReviewInfoMap1" style={{ width: '10%', height: '10%'}} />

        <Text>
          <span>
            서울특별시 강남구 대치동{" "}
          </span>
          <span>
            501
          </span>
        </Text>
        {/* ColorWheel1 */}
        <img src={ColorWheel1} alt="ColorWheel1" style={{  width: '10%', height: '10%'}} />

        <Text>어린이 공원</Text>
        {/* Telephone1 */}
        <img src={Telephone1} alt="Telephone1" style={{  width: '10%', height: '10%'}} />

        <Text>02-1234-1234</Text>
        {/* Information1 */}
        <img src={Information1} alt="Information1" style={{ width: '10%', height: '10%'}} />

        <Text>
          운동시설 <br />
          농구장, 축구장, 테니스장
        </Text>
    <Stack direction="row" spacing={1}>
    <Chip label="리뷰 작성하기" variant="outlined" onClick={handleClick} />
    <Chip label="리뷰 상세 보기" variant="outlined" onClick={handleClick} />
    </Stack>
  </Content>

    );
}

export default DetailInfo;





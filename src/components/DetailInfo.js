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
import ColorWheel1 from "../assets/right/ColorWheel1.svg";
import IconStar from "../assets/right/IconStar.svg";
import Information1 from "../assets/right/Information1.svg";
import ReviewInfoMap1 from "../assets/right/ReviewInfoMap1.svg";
import Telephone1 from "../assets/right/Telephone1.svg";

// 상세 리뷰 창 시에만 사용
import LeftArrow1 from "../assets/right/LeftArrow1.svg"; 

// 실제 DB 검색 결과를 반환해야 함.
function DetailInfo() {
  // 하단 버튼
  // 별점
  const [value, setValue] = React.useState(2);
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
    return (
            <Div41>
              <Div42>내주변 공원</Div42>
              <Div43>
                <Div44>1</Div44>
                <Div45>
                  <Div46>늘벗공원</Div46>
                  <Div47>
                    서울특별시 강남구 대치동{" "}
                    <span>
                      501
                    </span>
                  </Div47>
                </Div45>
                {/* 별 5개*/}
                {/* <Img4
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
                /> */}
                
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <Stack direction="row" spacing={1}>
                <img src={IconStar} alt="IconStar" style={{ width: '30px', height: '30px'}} />
                </Stack>
              </Div43>
              <Div48>
                <Div49>2</Div49>
                <Div50>
                  <Div51>늘푸른공원</Div51>
                  <Div52>
                    서울특별시 강남구 일원동{" "}
                    <span>
                      690
                    </span>
                  </Div52>
                </Div50>
                {/* 별 5개*/}
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                {/* <Img5
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
                /> */}
                <Stack direction="row" spacing={1}>
                <img src={IconStar} alt="IconStar" style={{ width: '30px', height: '30px'}} />
                </Stack>
              </Div48>
              <Div53>
                <Div54>3</Div54>
                <Div55>
                  <Div56>신사근린공원</Div56>
                  <Div57>
                    서울특별시 강남구 압구정동{" "}
                    <span>
                      422
                    </span>
                  </Div57>
                </Div55>
                {/* 별 5개*/}
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                {/* <Img6
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
                /> */}
                <Stack direction="row" spacing={1}>
                <img src={IconStar} alt="IconStar" style={{ width: '30px', height: '30px'}} />
                </Stack>
              </Div53>
              <Div58>
                <Div59>4</Div59>
                <Div60>
                  <Div61>
                    <Div62>포이근린공원</Div62>
                    <Div63>
                      서울특별시 강남구 개포동
                      <span>
                        {" "}
                        1239-21
                      </span>
                    </Div63>
                  </Div61>
                  {/* 별 5개*/}
                  <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  />
                  {/* <Img7
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
                  /> */}
                  <Stack direction="row" spacing={1}>
                <img src={IconStar} alt="IconStar" style={{ width: '30px', height: '30px'}} />
                </Stack>
                </Div60>
              </Div58>
              <Div64>
                <Div65>5</Div65>
                <Div66>
                  <Div67>
                    <Div68>청수근린공원</Div68>
                    <Div69>
                      서울특별시 강남구 청담동{" "}
                      <span>
                        134-13
                      </span>
                    </Div69>
                  </Div67>
                  {/* 별 5개*/}
                  <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  />
                  {/* <Img8
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
                  /> */}
                  <Stack direction="row" spacing={1}>
                <img src={IconStar} alt="IconStar" style={{ width: '30px', height: '30px'}} />
                </Stack>
                </Div66>
              </Div64>
              <Div70>
                <Div71>
                  <Div72>공원 정보</Div72>
                  
                  <Div73>
                  <Stack direction="row" spacing={1}>
                    늘벗공원 (10)
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <img src={IconStar} alt="IconStar" style={{ width: '30px', height: '30px'}} />
                  </Stack>  
                  </Div73>
                </Div71>
                {/* 별 5개*/}
                {/* <Img9
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f03d69fe4718fb023f02900583fcb45cc572485dd8eba071fab279529e362557?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
                /> */}
                
              </Div70>
              
              <Div74>
                <Div75>
                  {/* ReviewInfoMap */}
                  {/* <Img10
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3ddaf6287168308df0bc442e1889afdbeae6acb4833522e866675095810ef593?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ddaf6287168308df0bc442e1889afdbeae6acb4833522e866675095810ef593?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ddaf6287168308df0bc442e1889afdbeae6acb4833522e866675095810ef593?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ddaf6287168308df0bc442e1889afdbeae6acb4833522e866675095810ef593?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ddaf6287168308df0bc442e1889afdbeae6acb4833522e866675095810ef593?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ddaf6287168308df0bc442e1889afdbeae6acb4833522e866675095810ef593?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ddaf6287168308df0bc442e1889afdbeae6acb4833522e866675095810ef593?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ddaf6287168308df0bc442e1889afdbeae6acb4833522e866675095810ef593?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
                  /> */}
                  <img src={ReviewInfoMap1} alt="ReviewInfoMap1" style={{ width: '30px', height: '30px'}} />

                  <Div76>
                    <span>
                      서울특별시 강남구 대치동{" "}
                    </span>
                    <span>
                      501
                    </span>
                  </Div76>
                </Div75>
                <Div77>
                  {/* ColorWheel1 */}
                  {/* <Img11
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d6340f3ff3bfdba8a539698d7de9cc278607bad8874cd2c773d56c96eaa2b15c?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6340f3ff3bfdba8a539698d7de9cc278607bad8874cd2c773d56c96eaa2b15c?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6340f3ff3bfdba8a539698d7de9cc278607bad8874cd2c773d56c96eaa2b15c?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6340f3ff3bfdba8a539698d7de9cc278607bad8874cd2c773d56c96eaa2b15c?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6340f3ff3bfdba8a539698d7de9cc278607bad8874cd2c773d56c96eaa2b15c?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6340f3ff3bfdba8a539698d7de9cc278607bad8874cd2c773d56c96eaa2b15c?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6340f3ff3bfdba8a539698d7de9cc278607bad8874cd2c773d56c96eaa2b15c?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6340f3ff3bfdba8a539698d7de9cc278607bad8874cd2c773d56c96eaa2b15c?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
                  /> */}
                  <img src={ColorWheel1} alt="ColorWheel1" style={{  width: '30px', height: '30px'}} />

                  <Div78>어린이 공원</Div78>
                </Div77>
                <Div79>
                  {/* Telephone1 */}
                  {/* <Img12
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff14e53fe84748030dc40f2daed2cd62d93771850f560a2fa99c76012b626155?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff14e53fe84748030dc40f2daed2cd62d93771850f560a2fa99c76012b626155?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff14e53fe84748030dc40f2daed2cd62d93771850f560a2fa99c76012b626155?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff14e53fe84748030dc40f2daed2cd62d93771850f560a2fa99c76012b626155?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff14e53fe84748030dc40f2daed2cd62d93771850f560a2fa99c76012b626155?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff14e53fe84748030dc40f2daed2cd62d93771850f560a2fa99c76012b626155?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff14e53fe84748030dc40f2daed2cd62d93771850f560a2fa99c76012b626155?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff14e53fe84748030dc40f2daed2cd62d93771850f560a2fa99c76012b626155?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
                  /> */}
                  <img src={Telephone1} alt="Telephone1" style={{  width: '30px', height: '30px'}} />

                  <Div80>02-1234-1234</Div80>
                </Div79>
                <Div81>
                  {/* Information1 */}
                  {/* <Img13
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e43042ad90422ab0d16f7ebacc1fcf08f511f765c4db5e5fe3c362fa5fe2a24c?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e43042ad90422ab0d16f7ebacc1fcf08f511f765c4db5e5fe3c362fa5fe2a24c?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e43042ad90422ab0d16f7ebacc1fcf08f511f765c4db5e5fe3c362fa5fe2a24c?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e43042ad90422ab0d16f7ebacc1fcf08f511f765c4db5e5fe3c362fa5fe2a24c?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e43042ad90422ab0d16f7ebacc1fcf08f511f765c4db5e5fe3c362fa5fe2a24c?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e43042ad90422ab0d16f7ebacc1fcf08f511f765c4db5e5fe3c362fa5fe2a24c?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e43042ad90422ab0d16f7ebacc1fcf08f511f765c4db5e5fe3c362fa5fe2a24c?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e43042ad90422ab0d16f7ebacc1fcf08f511f765c4db5e5fe3c362fa5fe2a24c?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
                  /> */}
                  <img src={Information1} alt="Information1" style={{ width: '30px', height: '30px'}} />

                  <Div82>
                    운동시설 <br />
                    농구장, 축구장, 테니스장
                  </Div82>
                </Div81>
              </Div74>
              <Div83>
              <Stack direction="row" spacing={1}>
              <Chip label="리뷰 작성하기" variant="outlined" onClick={handleClick} />
              <Chip label="리뷰 상세 보기" variant="outlined" onClick={handleClick} />
              </Stack>
                <Div84>
                  <Div85>리뷰 작성하기</Div85>
                </Div84>
                <Div86>
                  <Div87>리뷰 상세 보기</Div87>
                </Div86>
              </Div83>
            </Div41>

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

const Div41 = styled.div`
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

const Div42 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #262627;
  text-overflow: ellipsis;
  align-self: stretch;
  font: 400 36px/213% Aguafina Script, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div43 = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
  line-height: 213%;
  justify-content: space-between;
  margin: 38px 0 0 13px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Div44 = styled.div`
  color: #262627;
  font: 700 20px Gmarket Sans TTF, sans-serif;
`;

const Div45 = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
`;

const Div46 = styled.div`
  color: #262627;
  font: 20px Aguafina Script, sans-serif;
`;

const Div47 = styled.div`
  color: #000;
  margin-top: 10px;
  font: 12px Aguafina Script, sans-serif;
`;

const Img4 = styled.img`
  aspect-ratio: 7.69;
  object-fit: auto;
  object-position: center;
  width: 148px;
  max-width: 100%;
`;

const Div48 = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
  line-height: 213%;
  margin: 29px 0 0 13px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Div49 = styled.div`
  color: #262627;
  flex-grow: 1;
  font: 700 20px Gmarket Sans TTF, sans-serif;
`;

const Div50 = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
`;

const Div51 = styled.div`
  color: #262627;
  font: 20px Aguafina Script, sans-serif;
`;

const Div52 = styled.div`
  color: #000;
  margin-top: 9px;
  font: 12px Aguafina Script, sans-serif;
`;

const Img5 = styled.img`
  aspect-ratio: 7.69;
  object-fit: auto;
  object-position: center;
  width: 148px;
  max-width: 100%;
`;

const Div53 = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
  line-height: 213%;
  margin: 36px 0 0 13px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Div54 = styled.div`
  color: #262627;
  flex-grow: 1;
  font: 700 20px Gmarket Sans TTF, sans-serif;
`;

const Div55 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  font-weight: 400;
`;

const Div56 = styled.div`
  color: #262627;
  font: 20px Aguafina Script, sans-serif;
`;

const Div57 = styled.div`
  color: #000;
  margin-top: 11px;
  font: 12px Aguafina Script, sans-serif;
`;

const Img6 = styled.img`
  aspect-ratio: 7.69;
  object-fit: auto;
  object-position: center;
  width: 148px;
  max-width: 100%;
`;

const Div58 = styled.div`
  display: flex;
  gap: 20px;
  line-height: 213%;
  margin: 35px 0 0 13px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Div59 = styled.div`
  color: #262627;
  align-self: start;
  flex-grow: 1;
  font: 700 20px Gmarket Sans TTF, sans-serif;
`;

const Div60 = styled.div`
  display: flex;
  gap: 9px;
  font-weight: 400;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div61 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div62 = styled.div`
  color: #262627;
  font: 20px Aguafina Script, sans-serif;
`;

const Div63 = styled.div`
  color: #000;
  margin-top: 11px;
  font: 12px Aguafina Script, sans-serif;
`;

const Img7 = styled.img`
  aspect-ratio: 7.69;
  object-fit: auto;
  object-position: center;
  width: 148px;
  align-self: start;
  max-width: 100%;
`;

const Div64 = styled.div`
  display: flex;
  gap: 20px;
  line-height: 213%;
  margin: 36px 0 0 15px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Div65 = styled.div`
  color: #262627;
  align-self: start;
  flex-grow: 1;
  font: 700 20px Gmarket Sans TTF, sans-serif;
`;

const Div66 = styled.div`
  display: flex;
  gap: 15px;
  font-weight: 400;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div67 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div68 = styled.div`
  color: #262627;
  font: 20px Aguafina Script, sans-serif;
`;

const Div69 = styled.div`
  color: #000;
  margin-top: 10px;
  font: 12px Aguafina Script, sans-serif;
`;

const Img8 = styled.img`
  aspect-ratio: 7.69;
  object-fit: auto;
  object-position: center;
  width: 148px;
  align-self: start;
  max-width: 100%;
`;

const Div70 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 60px;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
    margin-top: 40px;
  }
`;

const Div71 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Div72 = styled.div`
  color: rgba(38, 38, 39, 1);
  font: 400 36px Aguafina Script, sans-serif;
`;

const Div73 = styled.div`
  color: #262627;
  margin-top: 40px;
  font: 500 20px/213% Pretendard, sans-serif;
`;

const Img9 = styled.img`
  aspect-ratio: 7.69;
  object-fit: auto;
  object-position: center;
  width: 148px;
  align-self: end;
  margin-top: 72px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div74 = styled.div`
  border-radius: 30px;
  border-color: rgba(0, 0, 0, 0.42);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  margin-top: 13px;
  flex-direction: column;
  align-items: start;
  font-size: 15px;
  color: #000;
  font-weight: 400;
  line-height: 213%;
  padding: 10px 80px 20px 16px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div75 = styled.div`
  display: flex;
  gap: 12px;
  font-size: 14px;
`;

const Img10 = styled.img`
  aspect-ratio: 1.03;
  object-fit: auto;
  object-position: center;
  width: 29px;
`;

const Div76 = styled.div`
  font-family: Aguafina Script, sans-serif;
  align-self: start;
  margin-top: 11px;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div77 = styled.div`
  display: flex;
  margin-top: 22px;
  gap: 15px;
`;

const Img11 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 26px;
`;

const Div78 = styled.div`
  font-family: Aguafina Script, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const Div79 = styled.div`
  display: flex;
  margin-top: 18px;
  gap: 15px;
  font-size: 13px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img12 = styled.img`
  aspect-ratio: 0.89;
  object-fit: auto;
  object-position: center;
  width: 25px;
`;

const Div80 = styled.div`
  font-family: Aksara Bali Galang, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const Div81 = styled.div`
  display: flex;
  margin-top: 19px;
  gap: 14px;
  line-height: 32px;
`;

const Img13 = styled.img`
  aspect-ratio: 0.97;
  object-fit: auto;
  object-position: center;
  width: 31px;
  align-self: start;
`;

const Div82 = styled.div`
  font-family: Aguafina Script, sans-serif;
`;

const Div83 = styled.div`
  display: flex;
  gap: 20px;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.46px;
  line-height: 130%;
  margin: 44px 0 0 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const Div84 = styled.div`
  justify-content: center;
  border-radius: 30px;
  border-color: rgba(223, 223, 223, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--primary-contrast, #fff);
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  flex: 1;
  padding: 8px 22px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div85 = styled.div`
  font-family: Pretendard, sans-serif;
  justify-content: center;
`;

const Div86 = styled.div`
  justify-content: center;
  border-radius: 30px;
  background-color: #30cb6e;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: 800;
  flex: 1;
  padding: 8px 22px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div87 = styled.div`
  font-family: Pretendard, sans-serif;
  justify-content: center;
`;



export default DetailInfo;





/**
File Name : App.js
Description : 메인 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.10  강민규   Created
2024.06.10  강민규   Modified   지도 초안
2024.06.10  강민규   Modified   Header 분리
*/

import * as React from "react";
import styled from "styled-components";

function App() {
  return (
    <Div>
      {/* <Div2>
        <Div3>도시의 오아시스</Div3>
        <Div4>
          <Div5>공원 찾기</Div5>
          <Div6>데이터 스토리</Div6>
          <Div7>커뮤니티</Div7>
          <Div8>로그아웃</Div8>
        </Div4>
      </Div2> */}
      <Div9>
        <Div10>
          <Column>
            <Div11>
              <Div12>
                <Div13>
                  <Div14>지역 검색</Div14>
                </Div13>
                <Div15>
                  <Div16>직접 검색</Div16>
                </Div15>
              </Div12>
              <Div17>
                <Div18>지역 설정</Div18>
                <Div19>
                  시
                  {/* <span style="font-family: Acme, sans-serif;">
                    /
                  </span> */}
                  도
                </Div19>
                <Div20>
                  <Div21>
                    <Div22>선택</Div22>
                    <Img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
                    />
                  </Div21>
                </Div20>
                <Div23>
                  시
                  {/* <span style="font-family: Acme, sans-serif;">
                    /군/구
                  </span> */}
                </Div23>
                <Div24>
                  <Div25>
                    <Div26>선택</Div26>
                    {/* <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc40da5d0490f257b09abc03288ffe286746fb38f99f5c6d071f0c26824d2c74?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
                    /> */}
                  </Div25>
                </Div24>
                <Div27>추천 태그</Div27>
                <Div28>
                  <Div29>
                    <Column2>
                      <Div30>
                        <Div31>
                          <Div32>
                            <Div33>운동시설</Div33>
                          </Div32>
                          <Div34>
                            <Div35>유희시설</Div35>
                          </Div34>
                        </Div31>
                        <Div36>
                          <Div37>운동시설</Div37>
                        </Div36>
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
                    </Column4>
                  </Div29>
                </Div28>
                <Div42>
                  <Div43>
                    <Div44>선택 초기화</Div44>
                  </Div43>
                  <Div45>
                    <Div46>추천 공원 검색</Div46>
                  </Div45>
                </Div42>
              </Div17>
            </Div11>
          </Column>
          <Column5>
            <Img3
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2678a9c688083429ddcdd59efba0e7db2f8b9f2cf69fa2759d3df77759b2aeeb?apiKey=09b7b117ffe147409c9bb38f6b617fab&"
            />
          </Column5>
          <Column6>
            <Div47>
              <Div48>내주변 공원</Div48>
              <Div49>공원을 검색해보세요</Div49>
              <Div50>공원 정보</Div50>
              <Div51>공원을 선택해 주세요</Div51>
            </Div47>
          </Column6>
        </Div10>
      </Div9>
    </Div>
  );
}

const Div = styled.div`
  background-color: #fff;
  display: flex;
  padding-top: 44px;
  flex-direction: column;
`;


const Div9 = styled.div`
  margin-top: 29px;
  width: 100%;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div10 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 28%;
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
  width: 100%;
  padding: 1px 0 28px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div12 = styled.div`
  display: flex;
  width: 509px;
  max-width: 100%;
  gap: 0px;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.46px;
  line-height: 144%;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div13 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px 0px 10px;
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

const Div14 = styled.div`
  font-family: Pretendard, sans-serif;
  justify-content: center;
`;

const Div15 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 0px 10px 10px 0px;
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

const Div16 = styled.div`
  font-family: Pretendard, sans-serif;
  justify-content: center;
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

const Div43 = styled.div`
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

const Div44 = styled.div`
  font-family: Pretendard, sans-serif;
  justify-content: center;
`;

const Div45 = styled.div`
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

const Div46 = styled.div`
  font-family: Pretendard, sans-serif;
  justify-content: center;
`;

const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 44%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img3 = styled.img`
  aspect-ratio: 0.87;
  object-fit: auto;
  object-position: center;
  width: 100%;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Column6 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 29%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div47 = styled.div`
  border-radius: 15px;
  background-color: rgba(244, 244, 244, 0.45);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 36px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
  width: 100%;
  padding: 43px 44px 80px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div48 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #262627;
  text-overflow: ellipsis;
  font-family: Aguafina Script, sans-serif;
  line-height: 213%;
  align-self: start;
`;

const Div49 = styled.div`
  align-self: center;
  margin-top: 104px;
  font: 20px/213% Aguafina Script, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div50 = styled.div`
  font-family: Aguafina Script, sans-serif;
  color: rgba(38, 38, 39, 1);
  align-self: start;
  margin-top: 129px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div51 = styled.div`
  align-self: center;
  margin-top: 135px;
  font: 20px/213% Aguafina Script, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;




export default App;
/**
File Name : LeftContent.js
Description : 왼쪽 창 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.14  강민규   Created   지역 검색 직접 검색 총괄
2024.06.14  강민규   Modified  토글 추가
2024.06.14  강민규   Modified  탭에 색상 추가

*/

import * as React from "react";
import styled from "styled-components";
import '../../assets/fonts/font.css';
// import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

import LocationSearch from "./LocationSearch"; 
import DirectSearch from "./DirectSearch"; 
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

//탭 함수
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  //메인 함수
function LeftContent() {
    // 탭 토글
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Div>
        <Column>
    <Div12>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs value={value} onChange={handleChange} aria-label="Search Options">
          <StyledTab label="지역 검색" {...a11yProps(0)} /> {/* Div14 */}
          <StyledTab label="직접 검색" {...a11yProps(1)} /> {/* Div16 */}
        </StyledTabs>
      </Box>
      <Div13>
        {/* <Div14>지역 검색</Div14> */}
      </Div13>
      <Div15>
        {/* <Div16>직접 검색</Div16> */}
      </Div15>
    </Div12>
    <CustomTabPanel value={value} index={0}>
        <LocationSearch />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DirectSearch />
      </CustomTabPanel>
      </Column>
    </Div>
  );
}
const Div = styled.div`
  background-color: #fff;
  display: flex;
  padding-top: 44px;
  flex-direction: column;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 53%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
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

const StyledTabs = styled(Tabs)`
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

const StyledTab = styled(Tab)`
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px 0px 10px;
  font-family: Pretendard, sans-serif;
  display: flex;
  font-weight: 500;
  flex: 1;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
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

export default LeftContent;
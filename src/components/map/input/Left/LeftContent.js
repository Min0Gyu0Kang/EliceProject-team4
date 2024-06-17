/**
File Name : LeftContent.js
Description : 왼쪽 창 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.14  강민규   Created   지역 검색 직접 검색 총괄
2024.06.14  강민규   Modified  토글 추가
2024.06.14  강민규   Modified  탭에 색상 추가
2024.06.17  강민규   Modified  CSS 정리

*/

import * as React from "react";
import styled from "styled-components";
import '../../../../assets/fonts/font.css';
// import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

import LocationSearch from "./Tab1/LocationSearch"; 
import DirectSearch from "./DirectSearch"; 
import {Box,Tabs,Tab} from '@mui/material';
import PropTypes from 'prop-types';

const Content = styled.div`
  background-color: #fff;
  display: flex;
  padding-top: 44px;
  flex-direction: column;
  max-width: 30%;
`;

const StyledTabs = styled(Tabs)`
  display: flex;
  max-width: 100%;
  gap: 0px;
  font-size: 18px;
  text-transform: uppercase;
  padding: 20 0 0 0;
  letter-spacing: 0.46px;
  border-radius: 10px 0px 0px 10px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const StyledTab = styled(Tab)`
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px 0px 10px;
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

const Divider = styled.div`
    display:flex;
    flex-direction:column;
    line-height:normal;
    widthL 53%;
    margin-left:0;
    @media (max-width:991px){
      width:100%;
    }

`;

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
    <Content>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', minWidth:200}}>
        <StyledTabs 
        value={value} onChange={handleChange} aria-label="searchOptions"
        >
          <StyledTab sx={{
            fontFamily: 'PretendardBold',
            fontSize: 'inherit',
            width:50,
          }}
          label="지역 검색" {...a11yProps(0)} /> 
          <StyledTab sx={{
            fontFamily: 'PretendardBold',
            fontSize: 'inherit',
            width:50,
          }}
          label="직접 검색" {...a11yProps(1)} /> 
        </StyledTabs>
      </Box>
    <Divider>
    <CustomTabPanel value={value} index={0}>
      <LocationSearch />
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
      <DirectSearch />
    </CustomTabPanel>
    </Divider>
    </Content>
  );
}


export default LeftContent;
/**
File Name : TapContainer.js
Description : 검색 탭 컨테이너
Author : 임지영

History
Date        Author   Status    Description
2024.06.17  임지영    Created
*/

import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import LocationSearch from './LocationSearch'
import DirectSearch from './DirectSearch'
import LocationInputButton from './LocationInputButton'
import DirectInputButton from './DirectInputButton'

function CustomTabPanel(props) {
    const {children, value, index, ...other} = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{p: 3}}>{children}</Box>}
        </div>
    )
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export default function TapContainer({onSearchComplete, openParkList}) {
    const [selectedValues, setSelectedValues] = useState({
        city: '',
        district: '',
        selectedChips: [],
    })

    const [name, setName] = useState('')

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleClearSelection = value => {
        setSelectedValues({
            city: '',
            district: '',
            selectedChips: [],
        })
    }

    return (
        <Box sx={{width: '98%'}}>
            <Box sx={{borderColor: 'divider'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    TabIndicatorProps={{
                        style: {
                            display: 'none',
                        },
                    }}
                    sx={{
                        display: 'flex',
                        '& .MuiTabs-flexContainer': {
                            justifyContent: 'space-between',
                        },
                    }}
                >
                    <Tab
                        label="지역 검색"
                        {...a11yProps(0)}
                        sx={{
                            borderRadius: '8px 0 0 8px',
                            width: '50%',
                            height: '20px',
                            backgroundColor:
                                value === 0 ? '#30CB6E' : '#C7D1CB',
                            color: value === 0 ? 'white' : 'grey',
                            minHeight: '40px',
                        }}
                    />
                    <Tab
                        label="직접 검색"
                        {...a11yProps(1)}
                        sx={{
                            borderRadius: '0 8px 8px 0',
                            width: '50%',
                            height: '20px',
                            backgroundColor:
                                value === 1 ? '#30CB6E' : '#C7D1CB',
                            color: value === 1 ? 'white' : 'grey',
                            minHeight: '40px',
                        }}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <LocationSearch  // 지역 검색 화면 컴포넌트
                    selectedValues={selectedValues} // 시/군, 시/군/구 및 추천태그 선택값
                    setSelectedValues={setSelectedValues}  // selectedValues 변경 함수
                    onClearSelection={handleClearSelection} // 초기화하려고 만들어놓은 함수
                />
                <LocationInputButton
                 // 시/군, 시/군/구 및 추천태그 선택값
                 // 버튼 클릭시 쿼리파라미터로 보내기 위해
                    selectedValues={selectedValues} 
                    // MapPage를 거져서 내주변공원으로 입력 데이터 보내려고
                    onSearchComplete={onSearchComplete}
                    // 검색 버튼 클릭시 내주변공원 컴포넌트(NearPark > ParkList) 보여주기 위해
                    openParkList={openParkList}
                    // 초기화하려고 만들어놓은 함수
                    onClearSelection={handleClearSelection}
                />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                {/* 직접 검색한 값을 name으로 받아 오려고 */}
                <DirectSearch name={name} setName={setName} /> 
                <DirectInputButton
                    onSearchComplete={onSearchComplete} // LocationInputButton과 같은 용도
                    openParkList={openParkList} // 얘도
                    name={name} // 검색 버튼 클릭시 파라미터
                    onClearSelection={handleClearSelection}
                />
            </CustomTabPanel>
        </Box>
    )
}

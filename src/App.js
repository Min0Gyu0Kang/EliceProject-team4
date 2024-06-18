/**
File Name : App.js
Description : 메인 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.10  강민규   Created
2024.06.10  강민규   Modified   지도 초안
2024.06.11  강민규   Modified   Header 분리
2024.06.11  강민규   Modified   지도 찾기 분리
2024.06.11  강민규   Modified   헤더 Router 추가
2024.06.11  강민규   Modified   결과 / 리뷰 분리
2024.06.13  강민규   Modified   지도 (임시) svg 추가
2024.06.14  강민규   Modified   Park.js로 분리
2024.06.17  강민규   Modified   헤더 푸터 분리

*/

import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Park from './components/map/Park'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Park" element={<Park />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App;
/**
File Name : App
Description : 라우터
Author : 임지영

History
Date        Author   Status    Description
2024.06.10  임지영   Created
2024.06.11  임지영   Modified    로그인 경로 추가
*/

import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Map from './Map'
import Login from './Login'
import SignUp from './SignUp'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<Map />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                {/* 다른 경로들 */}
            </Routes>
        </BrowserRouter>
    )
}

export default App

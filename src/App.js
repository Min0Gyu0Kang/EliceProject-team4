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
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/DashboardPage'
import Community from './pages/CommunityPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/dataStory" element={<Dashboard />} />
                <Route path="/community" element={<Community />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

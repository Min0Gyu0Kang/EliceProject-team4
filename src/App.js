/**
File Name : App
Description : 라우터
Author : 임지영

History
Date        Author   Status    Description
2024.06.10  임지영   Created
2024.06.11  임지영   Modified    로그인 경로 추가
2024.06.19  김유림   Modified    헤더 로그인/로그아웃 시 변경
*/

import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/common/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/DashboardPage'
import Community from './pages/CommunityPage'
import Map from './pages/MapPage'
// import FindPassword from './pages/FindPassword'

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                <Route
                    path="/login"
                    element={<Login onLogin={handleLogin} />}
                />
                <Route path="/signUp" element={<SignUp />} />
                {/* <Route path="/findPassword" element={<FindPassword />} /> */}
                <Route path="/dataStory" element={<Dashboard />} />
                <Route path="/community" element={<Community />} />
                <Route path="/map" element={<Map />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

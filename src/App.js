/**
File Name : App
Description : 라우터
Author : 임지영

History
Date        Author   Status      Description
2024.06.10  임지영   Created
2024.06.11  임지영   Modified    로그인 경로 추가
2024.06.19  김유림   Modified    헤더 로그인/로그아웃 시 변경
2024.06.20  박수정   Modified    회원 페이지, 마이페이지, 회원정보 수정, 회원탈퇴 기능 추가
*/

import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/common/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/DashboardPage'
import Community from './pages/CommunityPage'
import Map from './pages/MapPage'
// import FindPassword from './pages/FindPassword'
import UserPage from './pages/UserPage'
import Mypage from './pages/Mypage'
import UpdateUser from './pages/UpdateUser'
import Withdraw from './pages/Withdraw'

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        // RefreshToken 토큰 설정 (테스트)
        localStorage.setItem(
            'refreshToken',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTg5MzI5MjMsImV4cCI6MTcxOTE5MjEyM30.5obJoNwrKBcdat2LQygoDs_AHal7I7ovRpv0RoEeGcQ',
        )
    }, [])

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
                <Route path="/users/userpage" element={<UserPage />} />
                <Route path="/users/mypage" element={<Mypage />} />
                <Route path="/users/update" element={<UpdateUser />} />
                <Route path="/users/withdraw" element={<Withdraw />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

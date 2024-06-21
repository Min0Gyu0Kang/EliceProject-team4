/**
File Name : App
Description : 라우터
Author : 임지영

History
Date        Author   Status      Description
2024.06.10  임지영   Created
2024.06.11  임지영   Modified    로그인 경로 추가
2024.06.19  김유림   Modified    헤더 로그인/로그아웃 시 변경
2024.06.20  박수정   Modified    회원 Index 페이지, 마이페이지, 회원정보 수정, 회원탈퇴 기능 추가
2024.06.21  박수정   Modified    회원 Index 페이지, 회원탈퇴 기능 수정
2024.06.22  김유림   Modified    div스타일 적용
2024.06.23  이유민   Modified    404 오류 해결
*/

import React, {useState, useEffect} from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    Navigate,
} from 'react-router-dom'
import Header from './components/common/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/DashboardPage'
import Community from './pages/CommunityPage'
import Map from './pages/MapPage'
import FindPassword from './pages/FindPassword'
import IndexPage from './pages/UserIndexPage'
import Mypage from './pages/Mypage'
import UpdateUser from './pages/UpdateUser'
import Withdraw from './pages/Withdraw'
import NotFound from './pages/NotFound'

const AppContent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const location = useLocation()
    useEffect(() => {}, [])

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    const hideHeaderPaths = ['/']

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            {!hideHeaderPaths.includes(location.pathname) && (
                <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            )}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={<Login onLogin={handleLogin} />}
                />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/findPassword" element={<FindPassword />} />
                <Route path="/dataStory" element={<Dashboard />} />
                <Route path="/community" element={<Community />} />
                <Route path="/map" element={<Map />} />
                <Route path="/users/index" element={<IndexPage />} />
                <Route path="/users/mypage" element={<Mypage />} />
                <Route path="/users/update" element={<UpdateUser />} />
                <Route
                    path="/users/withdraw"
                    element={<Withdraw onWithdraw={handleLogout} />}
                />
                <Route path="*" element={<Navigate to="/404" replace />} />
                <Route path="/404" element={<NotFound />} />
            </Routes>
        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}

export default App

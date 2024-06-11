import React from 'react'
import Header from '../components/header/Header'
import DashBoard from '../components/dashboard/DashBoard' // 수정된 부분
import Navigation from '../components/dashboard/Navigation'

const DashboardPage = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <DashBoard />
        </div>
    )
}

export default DashboardPage

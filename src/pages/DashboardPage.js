import React from 'react'
import Header from '../components/common/Header'
import DashBoard from '../components/dashboard/DashBoard'
import Navigation from '../components/common/Navigation'
import goalIcon from '../assets/images/goal.svg'

const DashboardPage = () => {
    return (
        <div>
            <Header />
            <Navigation
                title="커뮤니티"
                subtitle="공원에 대해 다양한 소통을 해보세요"
                icon={goalIcon}
            />
            <DashBoard />
        </div>
    )
}

export default DashboardPage

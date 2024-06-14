import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/DashboardPage'
import Community from './pages/CommunityPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dataStory" element={<Dashboard />} />
                <Route path="/community" element={<Community />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

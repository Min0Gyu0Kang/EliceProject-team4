import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/DashboardPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dataStory" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

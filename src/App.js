import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Map from './pages/MapPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/map" element={<Map />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

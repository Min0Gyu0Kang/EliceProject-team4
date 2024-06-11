/**
File Name : index
Description : 렌더링 담당 페이지
Author : 임지영

History
Date        Author   Status    Description
2024.06.08  임지영   Created
2024.06.11  임지영   Modified    설명 주석 추가
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './pages/App.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

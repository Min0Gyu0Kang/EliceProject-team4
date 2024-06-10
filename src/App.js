/**
File Name : App
Description : 라우터
Author : 임지영

History
Date        Author   Status    Description
2024.06.10  임지영   Created
*/

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Map from './Map'; // Map 컴포넌트

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        {/* 다른 경로들 */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

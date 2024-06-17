/**
File Name : Result.js
Description : 결과 출력(임시) js
Author : 강민규

History
Date        Author   Status    Description
2024.06.17  강민규   Created   
2024.06.17  강민규   Modified  
*/

// Result.js
import React from 'react';
import LocationSearch from '../../input/Right/Left/LocationSearch';
import DirectSearch from '../../input/Left/DirectSearch';

const Result = ({ value }) => {
  return (
    <div>
      <h3>Result</h3>
      <p>{value}</p>
    </div>
  );
};

export default Result;

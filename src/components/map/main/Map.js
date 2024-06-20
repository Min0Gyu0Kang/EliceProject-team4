/**
File Name : Map.js
Description : 지도 검색 js
Author : 강민규

History
Date        Author   Status    Description
2024.06.10  강민규   Created
2024.06.10  강민규   Modified   
2024.06.13  강민규   Modified  지도 시각화(초안)  
2024.06.13  강민규   Modified  지도 줌인아웃  
2024.06.13  강민규   Modified  지도 임시위치 마커  
2024.06.17  강민규   Modified  지도 마커 연동된 정보창  
2024.06.17  강민규   Modified  지도 클러스터 없음 
2024.06.19  강민규   Modified  지도 백엔드 /park/recommend 성공
2024.06.19  강민규   Modified  지도 Query 불러서 마커 반영 성공    
*/

// import {React,useEffect,useState} from "react";
// import styled from "styled-components";
// import axios from 'axios';
// // import { city, district, facilities} from "./Query"


// const Map = () => {
//     var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
//     var options = { //지도를 생성할 때 필요한 기본 옵션
//         center: new kakao.maps.LatLng(37.566851234596804, 126.97866357016943), //지도의 중심좌표.
//         level: 3 //지도의 레벨(확대, 축소 정도)
//     };

//     var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

//     return (
//         <div id="map" style={{ width: '40%', height: '50%' }}></div>
//     );
// }
// export default Map;

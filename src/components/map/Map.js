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
*/

import {React,useEffect,useState} from "react";
import styled from "styled-components";
import { KakaoMap, MarkerClusterer, Marker } from 'react-kakao-maps';
import $ from "jquery";
import axios from 'axios';

const Content = styled.div``;

const Layout = styled.div``;

const Map = () => {
    const [positions, setPositions] = useState([]);
    useEffect(() => {
        const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스

        const options = { // 지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
            level: 3 // 지도의 레벨(확대, 축소 정도)
        };

        const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        
        //**줌 인아웃

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        const mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        
        //**마커 생성

        // 마커를 표시할 위치와 title 객체 배열입니다 
        // var positions = [
        //     {
        //         title: '카카오', 
        //         latlng: new kakao.maps.LatLng(33.450705, 126.570677)
        //     },
        //     {
        //         title: '생태연못', 
        //         latlng: new kakao.maps.LatLng(33.450936, 126.569477)
        //     },
        //     {
        //         title: '텃밭', 
        //         latlng: new kakao.maps.LatLng(33.450879, 126.569940)
        //     },
        //     {
        //         title: '근린공원',
        //         latlng: new kakao.maps.LatLng(33.451393, 126.570738)
        //     },

        // ];
        const fetchData = async () => {
            try {
              const response = await fetch('http://localhost:3000/map');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              // Assuming data is an array of park objects with 'name', 'latitude', and 'longitude' fields
              const newPositions = data.map(map => ({
                title: map.name,
                latlng: new kakao.maps.LatLng(map.latitude, map.longitude)
              }));
              setPositions(newPositions);
              console.log(positions);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
        //**인포원도우 추가
        var openInfowindow = null;

        for (var i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(15, 20);

        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지 
            clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        });

        // 마커에 클릭 이벤트를 등록합니다 (각 마커마다 다른 인포윈도우를 열도록 수정)
        (function(marker, title) {
            kakao.maps.event.addListener(marker, 'click', function() {
                if (openInfowindow) {
                    openInfowindow.close();
                }
                var iwContent = '<div style="padding:5px;">' + title + '</div>'; // 인포윈도우 내용 설정
                var infowindow = new kakao.maps.InfoWindow({
                    content: iwContent,
                    removable: true // removeable 속성을 true로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
                });

                // 마지막 열린 창을 infoWindow로 지정 
                openInfowindow = infowindow;

                infowindow.open(map, marker); // 마커 위에 인포윈도우를 표시합니다

                
            });
        })(marker, positions[i].title);
    }
        //**클러스터 생성
       // 마커 클러스터러를 생성합니다 
        var clusterer = new kakao.maps.MarkerClusterer({
            map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
            minLevel: 10, // 클러스터 할 최소 지도 레벨 
            calculator: [10, 30, 50], // 클러스터의 크기 구분 값, 각 사이값마다 설정된 text나 style이 적용된다
            texts: getTexts, // texts는 ['삐약', '꼬꼬', '꼬끼오', '치멘'] 이렇게 배열로도 설정할 수 있다 
            styles: [{ // calculator 각 사이 값 마다 적용될 스타일을 지정한다
                    width : '30px', height : '30px',
                    background: 'rgba(51, 204, 255, .8)',
                    borderRadius: '15px',
                    color: '#000',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    lineHeight: '31px'
                },
                {
                    width : '40px', height : '40px',
                    background: 'rgba(255, 153, 0, .8)',
                    borderRadius: '20px',
                    color: '#000',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    lineHeight: '41px'
                },
                {
                    width : '50px', height : '50px',
                    background: 'rgba(255, 51, 204, .8)',
                    borderRadius: '25px',
                    color: '#000',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    lineHeight: '51px'
                },
                {
                    width : '60px', height : '60px',
                    background: 'rgba(255, 80, 80, .8)',
                    borderRadius: '30px',
                    color: '#000',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    lineHeight: '61px'
                }
            ]
        });
    
        // 클러스터 내부에 삽입할 문자열 생성 함수입니다 
        function getTexts( count ) {

        // 한 클러스터 객체가 포함하는 마커의 개수에 따라 다른 텍스트 값을 표시합니다 
        if(count < 10) {
            return '삐약';        
        } else if(count < 30) {
            return '꼬꼬';
        } else if(count < 50) {
            return '꼬끼오';
        } else {
            return '치멘';
        }
        }

        // 데이터를 가져오기 위해 jQuery를 사용합니다
        // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
        $.get("./Chicken.json", function(data) {
            // 데이터에서 좌표 값을 가지고 마커를 표시합니다
            // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
            var markers = $(data.positions).map(function(i, position) {
                return new kakao.maps.Marker({
                    position : new kakao.maps.LatLng(position.lat, position.lng)
                });
            });

            // 클러스터러에 마커들을 추가합니다
            clusterer.addMarkers(markers);
        });
    }, []);

    

    return (
        <div id="map" style={{ width: '40%', height: '50%' }}></div>
    );
}
export default Map;

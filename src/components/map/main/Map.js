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
2024.06.20  이유민   Modified  지도 수정   
*/

import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Map = () => {
    const [parkData, setParkData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:4000/park/recommend',
                    {
                        params: {
                            city: '강원특별자치도',
                            district: '고성군',
                            facilities: '',
                        },
                    },
                )
                return response.data.data // 데이터 반환
            } catch (error) {
                console.error('Error fetching data:', error)
                return null // 에러 발생 시 null 반환
            }
        }

        const getData = async () => {
            const data = await fetchData()
            setParkData(data)
        }

        getData() // 비동기 데이터를 처리하기 위한 함수를 호출
    }, [])

    useEffect(() => {
        // 카카오 객체가 로드된 후에 실행되도록 함
        const script = document.createElement('script')
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=941505440b119603799632887773298c&autoload=false`
        document.head.appendChild(script)

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map')
                // latitude와 longitude의 평균 계산
                const avgLat =
                    parkData.length > 0
                        ? parkData.reduce(
                              (sum, park) => sum + park.latitude,
                              0,
                          ) / parkData.length
                        : 37.715133
                const avgLng =
                    parkData.length > 0
                        ? parkData.reduce(
                              (sum, park) => sum + park.longitude,
                              0,
                          ) / parkData.length
                        : 126.734086

                const options = {
                    center: new window.kakao.maps.LatLng(avgLat, avgLng),
                    level: 8,
                }

                const map = new window.kakao.maps.Map(container, options)

                parkData.forEach(park => {
                    const markerPosition = new window.kakao.maps.LatLng(
                        park.latitude,
                        park.longitude,
                    )
                    const marker = new window.kakao.maps.Marker({
                        position: markerPosition,
                    })
                    marker.setMap(map)

                    // 마커 클릭 이벤트 추가
                    window.kakao.maps.event.addListener(marker, 'click', () => {
                        console.log(park.id)
                    })
                })
            })
        }

        return () => {
            document.head.removeChild(script)
        }
    }, [parkData])

    return <div id="map" style={{width: '100%', height: '100%'}}></div>
}

export default Map

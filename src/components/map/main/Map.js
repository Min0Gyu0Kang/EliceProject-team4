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
import {useSelector, useDispatch} from 'react-redux'
import {setSelectedParkId} from '../../redux/parkSlice' // 적절한 경로로 수정하세요

const Map = () => {
    const [parkData, setParkData] = useState([])
    const {city, district, selectedChips} = useSelector(state => state.park)
    const isLocation = useSelector(state => state.park.isLocation)
    const {getName} = useSelector(state => state.park)
    const dispatch = useDispatch()
    let url = ''

    if (isLocation === true) {
        const queryParams = new URLSearchParams()
        if (city) queryParams.append('city', city)
        if (district) queryParams.append('district', district)
        if (selectedChips && selectedChips.length > 0) {
            queryParams.append('facilities', selectedChips.join(','))
        }
        url = `/park/recommend?${queryParams.toString()}`
    } else {
        url = `/park/search/${getName}`
    }

    console.log(isLocation)
    console.log(url)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url)
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
    }, [url])

    useEffect(() => {
        // 카카오 객체가 로드된 후에 실행되도록 함
        const script = document.createElement('script')
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=941505440b119603799632887773298c&autoload=false&libraries=clusterer`
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
                    level: 7, // 화면에 보여지는 정도
                }

                const map = new window.kakao.maps.Map(container, options)

                // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
                const mapTypeControl = new window.kakao.maps.MapTypeControl()

                // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
                // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
                map.addControl(mapTypeControl)

                // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
                const zoomControl = new window.kakao.maps.ZoomControl()
                map.addControl(
                    zoomControl,
                    window.kakao.maps.ControlPosition.RIGHT,
                )

                // 클러스터러 생성
                const clusterer = new window.kakao.maps.MarkerClusterer({
                    map: map, // 마커들을 클러스터러에 추가합니다
                    averageCenter: true, // 클러스터들의 평균 중심을 사용합니다
                    minLevel: 3, // 클러스터 할 최소 지도 레벨
                    gridSize: 70, // 범위 더 넓게
                })

                // 마커들을 저장할 배열 생성
                let selectedMarker = null

                const markers = parkData.map(park => {
                    const markerPosition = new window.kakao.maps.LatLng(
                        park.latitude,
                        park.longitude,
                    )
                    const marker = new window.kakao.maps.Marker({
                        position: markerPosition,
                    })
                    window.kakao.maps.event.addListener(marker, 'click', () => {
                        if (selectedMarker) {
                            selectedMarker.setImage(null) // 이전 선택된 마커를 원래 이미지로 복원
                        }

                        const imageSrc =
                            'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png' // 노란색 마커 이미지 URL
                        const imageSize = new window.kakao.maps.Size(27, 40) // 마커 이미지 크기
                        const markerImage = new window.kakao.maps.MarkerImage(
                            imageSrc,
                            imageSize,
                        )

                        marker.setImage(markerImage)
                        selectedMarker = marker

                        console.log(park.id)
                        dispatch(setSelectedParkId(park.id))
                    })
                    return marker
                })

                clusterer.addMarkers(markers)
            })
        }

        return () => {
            document.head.removeChild(script)
        }
    }, [parkData])

    return <div id="map" style={{width: '100%', height: '100%'}}></div>
}

export default Map

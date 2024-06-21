/*
File Name : logoutUser
 Description : 사용자 로그아웃 함수
 Author : 김유림
 
 History
 Date        Author   Status    Description
 2024.06.19  김유림    Created   초기 버전
 */

import axios from 'axios'

const API_BASE_URL = '/users/logout'

const logoutUser = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken')
        if (!refreshToken) {
            throw new Error('Refresh Token이 없습니다.')
        }

        await axios.post(`${API_BASE_URL}`, {refreshToken})

        // 로그아웃 성공 후, 로컬 스토리지에서 토큰 제거
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')

        // 로그아웃 성공 후 추가적인 클라이언트 측 처리 가능
    } catch (error) {
        console.error('로그아웃 실패:', error)
        // 오류 처리 (예: 사용자에게 오류 메시지 표시)
    }
}

export default logoutUser

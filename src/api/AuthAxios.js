/**File Name : AuthAxios
Description : Axios 인스턴스 생성, 요청 및 응답 인터셉터 설정
Author : 박수정

History
Date        Author   Status     Description
2024.06.20  박수정   Created
2024.06.20  박수정   Modified   Axios 인스턴스 생성, 요청 및 응답 인터셉터 설정
*/

import axios from 'axios'
import reissueAccessToken from './ReissueAccessToken'

// authAxios 인스턴스 생성
const authAxios = axios.create({
    baseURL: ''
})

// authAxios 인스턴스에 대해 요청 인터셉터 설정
authAxios.interceptors.request.use(
    (config) => {
        // AccessToken 가져옴
        const accessToken = localStorage.getItem('accessToken')

        // 유효한 AccessToken 존재하면, Authorization 헤더에 AccessToken 추가
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }

        return config
    },
    (error) => Promise.reject(error)
)

// authAxios 인스턴스에 대해 응답 인터셉터 설정
authAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
        // AccessToken 만료 시, RefreshToken으로 새로운 AccessToken 발급
        const originalRequest = error.config

        // 응답 상태 코드가 401 Unauthorized이고, 요청이 재시도되지 않는 경우
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            try {
                // RefreshToken으로 AccessToken을 재발급 받음
                const newAccessToken = await reissueAccessToken()
                
                // Authorization 헤더에 새로운 AccessToken 설정
                axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
                
                // 기존 요청을 authAxios 인스턴스로 재전송
                return authAxios(originalRequest)
            } catch (err) {
                return Promise.reject(err)
            }
        }
        return Promise.reject(error)
    }
)

export default authAxios
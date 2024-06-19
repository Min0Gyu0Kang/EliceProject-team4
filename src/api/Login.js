/**
 * File Name : login
 * Description : 로그인 함수
 * Author : 김유림
 *
 * History
 * Date        Author   Status    Description
 * 2024.06.19  김유림    Created   초기 버전
 */

import axios from 'axios'

const API_BASE_URL = '/users/login'

const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}`, {
            email,
            password,
        })

        const {accessToken, refreshToken} = response.data

        // 로그인 성공 후, 받아온 토큰들을 로컬 스토리지에 저장
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)

        // axios 요청에 Authorization 헤더 추가
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

        return {accessToken, refreshToken}
    } catch (error) {
        throw error
    }
}

export default loginUser

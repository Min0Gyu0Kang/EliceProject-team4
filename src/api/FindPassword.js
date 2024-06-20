/**
  File Name : FindPassword
  Description : 비밀번호 찾기
  Author : 김유림
 
  History
  Date        Author   Status    Description
  2024.06.20  김유림    Created   초기 버전
 */

import axios from 'axios'

const API_BASE_URL = '/users/find-password'

const findPassword = async (name, email) => {
    try {
        const response = await axios.post(`${API_BASE_URL}`, {
            name,
            email,
        })
        return response.data
    } catch (error) {
        throw error
    }
}

export default findPassword

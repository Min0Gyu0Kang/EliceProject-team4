/**
 File Name : SignUp
 Description : 회원가입 함수
 Author : 김유림
 
 History
 Date        Author   Status    Description
 2024.06.19  김유림    Created   초기 버전
 */

import axios from 'axios'

const API_BASE_URL = '/users/signup'

const signUp = async userData => {
    try {
        const response = await axios.post(API_BASE_URL, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return response.data
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

export default signUp

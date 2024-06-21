/**File Name : ReissueAccessToken
Description : AccessToken 재발급
Author : 박수정

History
Date        Author   Status     Description
2024.06.20  박수정   Created
2024.06.20  박수정   Modified   AccessToken 재발급 추가
*/

import axios from 'axios'

// RefreshToken으로 AccessToken 재발급
const reissueAccessToken = async () => {
    try {
        // localStorage에 저장된 RefreshToken 가져옴
        const refreshToken = localStorage.getItem('refreshToken')

        // 서버에 post('/reissue-token) 요청
        const response = await axios.post('/users/reissue-token', {
            refreshToken,
        })

        // 서버로부터 newAccessToken 재발급
        const {newAccessToken} = response.data.token

        // localStorage에 newAccessToken 저장
        localStorage.setItem('accessToken', newAccessToken)

        return newAccessToken
    } catch (error) {
        throw error
    }
}

export default reissueAccessToken

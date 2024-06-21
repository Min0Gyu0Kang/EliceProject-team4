/**File Name : Withdraw
Description : 회원 탈퇴
Author : 박수정

History
Date        Author   Status     Description
2024.06.20  박수정   Created
2024.06.20  박수정   Modified   회원 탈퇴 기능 추가
*/

import authAxios from './AuthAxios'

export const withdrawUser = (password) => authAxios.post('/users/withdraw', password)
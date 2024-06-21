/**File Name : UpdateUser
Description : 회원정보 수정 API
Author : 박수정

History
Date        Author   Status     Description
2024.06.20  박수정   Created
2024.06.20  박수정   Modified   회원정보 수정 기능 추가
*/

import authAxios from './AuthAxios'

export const updateUser = (newUserInfo) => authAxios.put('/users/update', newUserInfo)
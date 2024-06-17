/**
File Name : config
Description : API
Author : 임지영

History
Date        Author   Status    Description
2024.06.17  임지영    Created   
*/

const BASE_URL = 'http://localhost:4000'

const API = {
    dashboard: `${BASE_URL}/dashboard`,
    map: `${BASE_URL}/map`,
    park_sido: `${BASE_URL}/recommend/city`,
    recommend_park: `${BASE_URL}/park/recommend`,
    search_park: `${BASE_URL}/park/search`,
    park_info: `${BASE_URL}/park/infomation`,
    park_review: `${BASE_URL}/park-review`,
    show_park_review: `${BASE_URL}/park-review/details`,
}
export default API

/**
File Name : useParkData
Description : 서버에서 데이터 받아오는 사용자 정의 Hook
Author : 임지영

History
Date        Author   Status    Description
2024.06.14  임지영   Created
2024.06.17  임지영   Modified   method 명시
*/

import {useState, useEffect} from 'react'

export const useParkData = url => {
    const [parkData, setParkData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) return

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    mode: 'cors',
                })
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const data = await response.json()
                setParkData(data)
            } catch (err) {
                setError(err)
            }
        }
        fetchData()
    }, [url])

    return {parkData}
}

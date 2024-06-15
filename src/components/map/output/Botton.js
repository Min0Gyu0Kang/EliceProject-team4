/**
File Name : Botton
Description : right section 리뷰작성하기, 상세보기 버튼
Author : 김유림

History
Date        Author   Status    Description
2024.06.14  김유림    Created   
*/

import * as React from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const ClickableChips = () => {
    const handleClick = () => {
        console.info('You clicked the Chip.')
    }

    return (
        <Stack direction="row" spacing={4}>
            <Chip
                label="리뷰작성하기"
                onClick={handleClick}
                sx={{
                    backgroundColor: '#ffffff',
                    color: 'grey',
                    padding: '16px 15px', // Adjust padding to increase size
                    fontSize: '1rem', // Optionally adjust font size
                }}
                variant="outlined"
                size="large"
            />
            <Chip
                label="리뷰상세보기"
                onClick={handleClick}
                sx={{
                    backgroundColor: '#30cb6e',
                    color: 'white',
                    padding: '16px 15px', // Adjust padding to increase size
                    fontSize: '1rem', // Optionally adjust font size
                }}
                variant="outlined"
                size="large"
            />
        </Stack>
    )
}

export default ClickableChips

/**
File Name : ReviewDetail
Description : 리뷰 상세보기 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.18  김유림    Created   
2024.06.19  임지영    Modified   api 연결   
2024.06.19  임지영    Modified   데이터 로딩 시 안내 문구 추가  
2024.06.20  임지영    Modified   fetch -> axios
*/

import React, {useState, useEffect} from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Keyword from '../../common/Keyword'
import Divider from '@mui/material/Divider'
import styled from 'styled-components'
import BackIcon from '../../../assets/images/back.svg'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import Button from './Button'
import {useSelector} from 'react-redux'

const Container = styled.div`
    width: 100%;
    max-width: 400px;
    overflow-y: auto;
`

const StyledListItem1 = styled(ListItem)`
    display: flex;
`

const StyledListItem2 = styled(ListItem)`
    display: flex;
    margin-top: -15px;
`

const ContentWrapper = styled.div`
    flex-direction: column;
    padding: 0px 15px;
    width: 100%;
`

const ParkNameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px;
    margin-left: 12px;
`

const RatingWrapper = styled(Box)`
    display: flex;
    align-items: center;
`

const Loading = styled.div`
    height: 100%;
    text-align: center;
    display: felx;
    align-items: center;
    justify-content: center;
`

const ReviewDetail = ({onBackClick}) => {
    const selectedParkId = useSelector(state => state.park.selectedParkId)
    const [data, setData] = useState(null) // 초기값을 null로 설정

    console.log('Selected Park ID:', selectedParkId)

    useEffect(() => {
        const fetchData = async () => {
            if (!selectedParkId) {
                console.error('Invalid selectedParkId:', selectedParkId)
                return
            }

            const url = `/park-review/details/${selectedParkId}`
            console.log('Fetching URL:', url)

            try {
                const response = await axios.get(url)
                setData(response.data)
            } catch (error) {
                console.error('Error fetching the data', error)
            }
        }

        fetchData()
    }, [selectedParkId])
    const handleBackClick = () => {
        // 뒤로가기 버튼 클릭
        onBackClick()
    }

    // 데이터가 로드되지 않았을 때 로딩 상태를 표시
    if (!data) {
        return (
            <Loading>
                <p>리뷰 정보를 가져오는 중입니다</p>
            </Loading>
        )
    }
    console.log('리뷰:', data)

    // parkId가 유효하고 data.park에 해당하는 공원 정보가 있는 경우
    if (selectedParkId && data.park.find(park => park.id === selectedParkId)) {
        const parkInformation = data.park.find(
            park => park.id === selectedParkId,
        )

        return (
            <ContentWrapper>
                <Container>
                    <IconButton onClick={handleBackClick}>
                        <img
                            src={BackIcon}
                            alt="Back"
                            style={{
                                width: '20px',
                                height: '20px',
                                marginTop: '10px',
                            }}
                        />
                    </IconButton>
                    <ParkNameWrapper>
                        <Keyword text={parkInformation.name} />
                        <RatingWrapper>
                            <Typography
                                style={{
                                    fontSize: '22px',
                                    minWidth: '30px',
                                    marginBottom: '6px',
                                }}
                            >
                                ({parkInformation.average_review.toFixed(1)})
                            </Typography>
                            <Rating
                                name="half-rating"
                                value={1}
                                max={1}
                                readOnly
                                style={{
                                    marginLeft: '8px',
                                    marginBottom: '5px',
                                }}
                            />
                        </RatingWrapper>
                    </ParkNameWrapper>
                    <Divider sx={{margin: '20px'}} />

                    {data.review.length === 0 && (
                        <Typography
                            variant="body2"
                            style={{textAlign: 'center', padding: '100px'}}
                        >
                            아직 리뷰가 없어요. 작성해주세요!
                        </Typography>
                    )}

                    <List
                        sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                        }}
                    >
                        {data.review.map((review, index) => (
                            <div key={data.review.review_id}>
                                <StyledListItem1>
                                    <ListItemAvatar>
                                        <Avatar />
                                    </ListItemAvatar>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flex: 1,
                                        }}
                                    >
                                        <ListItemText
                                            primary={review.nickname}
                                            style={{flex: 1}}
                                        />
                                        <Rating
                                            name={`rating-${index}`}
                                            value={review.grade}
                                            precision={0.5}
                                            readOnly
                                            style={{
                                                marginLeft: '8px',
                                                marginRight: '8px',
                                            }}
                                        />
                                        <Typography variant="body2">
                                            ({review.grade.toFixed(1)})
                                        </Typography>
                                    </div>
                                </StyledListItem1>
                                <StyledListItem2>
                                    <ListItemText
                                        secondary={review.content}
                                        style={{flex: 1, marginLeft: '58px'}}
                                    />
                                </StyledListItem2>
                                <Divider sx={{margin: '10px'}} />
                            </div>
                        ))}
                    </List>
                </Container>
            </ContentWrapper>
        )
    }

    // parkId가 유효하지 않거나 data.park에 해당하는 공원 정보가 없는 경우
    return null
}

export default ReviewDetail

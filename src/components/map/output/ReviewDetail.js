/**
File Name : ReviewDetail
Description : 리뷰 상세보기 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.18  김유림    Created   
*/

import React from 'react'
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

const ReviewDetail = ({parkId, onBackClick}) => {
    // 더미 데이터 예시
    const data = {
        park: {
            parkId: 1,
            name: '늘벗공원',
            average_review: '4.5',
        },
        review: [
            {
                nickname: '하하하',
                grade: 4.5,
                content: '공원이 너무 좋아요!',
            },
            {
                nickname: '호호호',
                grade: 3,
                content:
                    '이 공원은 자연의 아름다움을 최대한 즐길 수 있는 곳입니다. 넓은 잔디밭과 맑고 깨끗한 공기가 매력적이며, 다채로운 식물과 새들의 노래가 경치를 더욱 아름답게 만듭니다. 가족 모두가 함께 즐길 수 있는 좋은 장소입니다.',
            },
            {
                nickname: '후후후',
                grade: 5.0,
                content: '완벽한 공원입니다!',
            },
        ],
    }

    const handleBackClick = () => {
        onBackClick()
    }

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
                    <Keyword text={data.park.name} />
                    <RatingWrapper>
                        <Typography
                            style={{
                                fontSize: '22px',
                                minWidth: '30px',
                                marginBottom: '6px',
                            }}
                        >
                            ({data.park.average_review})
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
                <Divider sx={{margin: '10px'}} />

                <List
                    sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                    }}
                >
                    {data.review.map((review, index) => (
                        <div key={index}>
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
                                        name="half-rating"
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

export default ReviewDetail

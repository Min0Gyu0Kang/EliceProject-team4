import * as React from 'react'
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

const RightSection = styled.div`
    background-color: #ffffff;
    display: flex;
    flex: 1;
`

const Container = styled.div`
    width: 100%;
    max-width: 400px;
    overflow-y: auto;
    margin: 0 auto;
`

const StyledListItem = styled(ListItem)`
    height: 100px;
    display: flex;
    align-items: center;

    .MuiListItemText-root {
        flex: 1;
        word-wrap: break-word;
    }
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
    width: 950%;
`

const IconButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 16px;
`

const ReviewDetail = ({parkId, onBackClick}) => {
    const park = {
        id: parkId,
        name: '늘벗공원',
        nickname: '하하하',
        content: '공원이 너무 좋아요!',
    }

    const handleBackClick = () => {
        onBackClick()
    }

    return (
        <RightSection>
            <ContentWrapper>
                <Container>
                    <IconButtonWrapper>
                        {/* IconButton을 사용하여 SVG 아이콘 넣기 */}
                        <IconButton onClick={handleBackClick}>
                            <img
                                src={BackIcon}
                                alt="Back"
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    marginRight: '5px',
                                }}
                            />
                        </IconButton>
                        <Keyword text={`${park.name}에 대한 리뷰`} />
                    </IconButtonWrapper>
                    <List
                        sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                        }}
                    >
                        <StyledListItem>
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <ListItemText
                                primary={park.nickname}
                                secondary={park.content}
                            />
                        </StyledListItem>
                        <Divider />
                        <StyledListItem>
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <ListItemText
                                primary={park.nickname}
                                secondary={park.content}
                            />
                        </StyledListItem>
                        <Divider />
                        <StyledListItem>
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <ListItemText
                                primary={park.nickname}
                                secondary={park.content}
                            />
                        </StyledListItem>
                        {/* 추가적인 ListItem들을 여기에 추가 */}
                        <Divider />
                    </List>
                </Container>
            </ContentWrapper>
        </RightSection>
    )
}

export default ReviewDetail

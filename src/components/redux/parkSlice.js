import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    // park 관련 초기 상태
    view: 'main',
    showParkList: false,
    selectedParkId: 0,
    searchResults: {},
    // search 관련 초기 상태
    city: '',
    district: '',
    selectedChips: [],
    name: '',
    // 공원정보관 관련 초기 상태
    data: null,
    parkName: '',
    ratings: 0,
    getData: {},
    getName: '',
    isLocation: null,
    //리뷰 아이디
    url: '/park/recommend?city=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C&district=%EC%9A%A9%EC%82%B0%EA%B5%AC',
    isSearchResults: false,
    // 리뷰 수정
    reviewId: null,
    reReview: true,
    star: true,
    isPark: true,
}

const parkSlice = createSlice({
    name: 'park',
    initialState,
    reducers: {
        setIsSearchResults: (state, action) => {
            state.isSearchResults = action.payload
        },
        setUrl: (state, action) => {
            state.url = action.payload
        },
        setSelection: (state, action) => {
            state.city = action.payload.city
            state.district = action.payload.district
            state.selectedChips = action.payload.selectedChips
            state.name = action.payload.name
        },
        // park 관련 액션
        setView: (state, action) => {
            state.view = action.payload
        },
        setShowParkList: (state, action) => {
            state.showParkList = action.payload
        },
        setSelectedParkId: (state, action) => {
            state.selectedParkId = action.payload
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload
        },
        resetSelection: state => {
            state.selectedParkId = null
            state.showParkList = false
        },
        // search 관련 액션
        setCity: (state, action) => {
            state.city = action.payload
        },
        setDistrict: (state, action) => {
            state.district = action.payload
        },
        setSelectedChips: (state, action) => {
            state.selectedChips = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        clearSelection: state => {
            state.city = ''
            state.district = ''
            state.selectedChips = []
        },
        // 공원정보 관련 액션
        setData: (state, action) => {
            state.data = action.payload
        },
        setParkName: (state, action) => {
            state.parkName = action.payload
        },
        setRatings: (state, action) => {
            state.ratings = action.payload
        },
        // 버튼 클릭했을 때 정보 넘어가도록
        setGetData: (state, action) => {
            state.getData = action.payload
        },
        setGetName: (state, action) => {
            state.getName = action.payload
        },
        // 지역인지 직접인지
        setIsLocation: (state, action) => {
            state.isLocation = action.payload
        },
        // 리뷰 수정&삭제
        setReviewId: (state, action) => {
            state.reviewId = action.payload
        },
        setReReview: (state, action) => {
            state.reReview = action.payload
        },
        // 별점 렌더링
        setStar: (state, action) => {
            state.star = action.payload
        },
        setIsPark: (state, action) => {
            state.render = action.payload
        },
    },
})

export const {
    setIsSearchResults,
    setUrl,
    setSelection,
    setView,
    setShowParkList,
    setSelectedParkId,
    setSearchResults,
    resetSelection,
    setCity,
    setDistrict,
    setSelectedChips,
    setName,
    clearSelection,
    setData,
    setParkName,
    setRatings,
    setGetData,
    setGetName,
    setIsLocation,
    setReviewId,
    setReReview,
    setStar,
    setIsPark,
} = parkSlice.actions

export default parkSlice.reducer

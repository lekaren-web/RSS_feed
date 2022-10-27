import axios from 'axios'
const initialState = []

const SET_FEEDS = 'SET_FEEDS'
const SINGLE_FEED = 'SINGLE_FEED'
const CREATE_FEED = 'CREATE_FEED'
const DELETE_FEED = 'DELETE_FEED'
const UPDATE_FEED = 'UPDATE_FEED'

export const setFeeds = (feeds) => ({
  type: SET_FEEDS,
  feeds
});

// export const singleFeed = (feed) => ({
//   type: SINGLE_FEED,
//   feed
// })
export const createFeed = (feed) => ({
  type: CREATE_FEED,
  feed
});

// export const deleteFeed = (feed) => ({
//   type: DELETE_FEED,
//   feed
// })

// export const updateFeed = (feed) => ({
//   type: UPDATE_FEED,
//   feed
// })

export const fetchFeeds = () => {
  return async (dispatch) => {
    try {
  const { data } = await axios.get('/api/feeds');
  dispatch(setFeeds(data))
} catch (err) {
  // console.log(err)
}}};

// export const fetchSingleFeed = (id) => async (dispatch) => {
//   try {
//     const {data} = await axios.get(`/api/feeds/${id}`)
//     dispatch(singleFeed(data))
//   } catch (err) {
//     console.log(err)
//   }
// }

export const createNewFeed = (feed, history) => {
return async (dispatch) => {
  const {data: created} = await axios.post('/api/feed/create', feed)
  dispatch(createFeed(created))
  history.push('/feed')
}}

// export const deleteTheFeed = (id, history) => {
//   return async (dispatch) => {
//     const {data: feed} = await axios.delete(`api/feeds/${id}`)
//     dispatch(deleteFeed(Feed))
//     history.push('/')
//     history.push('/feeds')
//   }
// }

// export const updateTheFeed = (feed, history) => {
//   return async (dispatch) => {
//     const {data: updated} = await axios.put(`/api/feeds/edit/${feed.id}`, feed)
//     dispatch(updateFeed(updated));
//     history.push('/')
//     history.push(`/feeds/${feed.id}`)
//   }
// }

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function feedsReducer(state = initialState, action) {
switch (action.type){
  case 'SET_FEEDS':
    return action.feeds

  case 'SINGLE_FEED':
    return action.feed

  case 'CREATE_FEED':
    return [...state, action.feed]

//   case 'DELETE_FEED':
//   return state.filter((feed) => feed.id !== action.feed.id)

//   case 'UPDATE_FEED':
//      state = []
//       return state.map((feed) => { return feed.id === action.feed.id ? action.feed : feed})
  default:
  return state
}
}
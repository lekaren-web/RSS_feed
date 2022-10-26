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

// export const singleProject = (project) => ({
//   type: SINGLE_PROJECT,
//   project
// })
// export const createProject = (project) => ({
//   type: CREATE_PROJECT,
//   project
// });

// export const deleteProject = (project) => ({
//   type: DELETE_PROJECT,
//   project
// })

// export const updateProject = (project) => ({
//   type: UPDATE_PROJECT,
//   project
// })

export const fetchFeeds = () => {
  return async (dispatch) => {
    try {
  const { data } = await axios.get('/api/feeds');
  dispatch(setFeeds(data))
} catch (err) {
  // console.log(err)
}}};

// export const fetchSingleProject = (id) => async (dispatch) => {
//   try {
//     const {data} = await axios.get(`/api/projects/${id}`)
//     dispatch(singleProject(data))
//   } catch (err) {
//     console.log(err)
//   }
// }
// export const createNewProject = (project, history) => {
// return async (dispatch) => {
//   const {data: created} = await axios.post('/api/projects/create', project)
//   dispatch(createProject(created))
//   history.push('/projects')
// }}

// export const deleteTheProject = (id, history) => {
//   return async (dispatch) => {
//     const {data: project} = await axios.delete(`api/projects/${id}`)
//     dispatch(deleteProject(project))
//     history.push('/')
//     history.push('/projects')
//   }
// }

// export const updateTheProject = (project, history) => {
//   return async (dispatch) => {
//     const {data: updated} = await axios.put(`/api/projects/edit/${project.id}`, project)
//     dispatch(updateProject(updated));
//     history.push('/')
//     history.push(`/projects/${project.id}`)
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

//   case 'CREATE_PROJECT':
//     return [...state, action.project]

//   case 'DELETE_PROJECT':
//   return state.filter((project) => project.id !== action.project.id)

//   case 'UPDATE_PROJECT':
//      state = []
//       return state.map((project) => { return project.id === action.project.id ? action.project : project})
  default:
  return state
}
}
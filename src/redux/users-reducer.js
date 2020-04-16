const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETCURRENTPAGE = 'SETCURRENTPAGE';
const SETTOTALCOUNT = 'SETTOTALCOUNT'

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3
};

const usersReducer = (state = initialState, action) => {
    
    switch(action.type){
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SETUSERS:
            return {
                ...state, users: [ ...action.users]
            }
        case SETCURRENTPAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SETTOTALCOUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        default:
            return state;
    }       
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SETUSERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SETCURRENTPAGE, currentPage})
export const setTotalUsersCountAC = (totalCount) => ({type: SETTOTALCOUNT, count: totalCount})


export default usersReducer;
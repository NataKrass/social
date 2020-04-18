const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETCURRENTPAGE = 'SETCURRENTPAGE';
const SETTOTALCOUNT = 'SETTOTALCOUNT';
const TOOGLEISFETCHING = 'TOOGLEISFETCHING';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        case TOOGLEISFETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }       
}


export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SETUSERS, users})
export const setCurrentPage = (currentPage) => ({type: SETCURRENTPAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SETTOTALCOUNT, count: totalCount})
export const toogleIsFetching = (isFetching) => ({type: TOOGLEISFETCHING, isFetching})

export default usersReducer;
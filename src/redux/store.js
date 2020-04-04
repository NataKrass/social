import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'Hi, how are you?', likesCount: 5},
                {id: 2, message: 'It is my first post', likesCount: 8},
                {id: 3, message: 'Something new', likesCount: 16},
                {id: 4, message: 'wow', likesCount: 1} ],
            newPostText: 'it-kamasutra'
        },
        messagesPage: {
            messages: [{id: 1, message: 'Hi, how are you?'},
                        {id: 2, message: 'Whats up guys'},
                        {id: 3, message: 'How is your project?'}],
            dialogs: [{id: 1, name: 'Nata'},
                      {id: 2, name: 'Mat'},
                      {id: 3, name: 'Stew'},
                      {id: 4, name: 'Valery'},
                      {id: 5, name: 'Roman'},
                      {id: 6, name: 'Kate'}],
            newMessageBody: ''          
        },
        sidebar: {
            name: [{id:1, call: 'Nata'},
            {id:2, call: 'Kate'},
            {id:3, call: 'Joah'}]
        }
    
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { //{type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}    

export default store;
window.store = store;
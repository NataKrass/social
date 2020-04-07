const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            return {
                ...state,
                newMessageBody: action.body
            }; 
        }
        case SEND_MESSAGE:{
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreater = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => 
({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;
import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../storeContext';
import {connect} from 'react-redux';

// const SuperDialogsContainer = () => {

//     return <StoreContext.Consumer>
//         {
//         (store) => {
                    
//             let state = store.getState().messagesPage;

//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreater());
//             };
//             let onNewMessageChange = (body) => {
//                 // let body = newMessage.current.value;or:
//                 //let body = e.target.value;
//                 store.dispatch(updateNewMessageBodyCreator(body))
//             }
//             return  <Dialogs sendMessage={onSendMessageClick}
//             updateNewMessageBody={onNewMessageChange}
//             messagesPage={state} />
//         }
       
//     }
       
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreater());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;

import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreater } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogs = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> );
    let messages = state.messages.map( m => <Message key={m.id} message={m.message}/> );
    let newMessageText = state.newMessageBody;

    let newMessage = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        // let body = newMessage.current.value;or:
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                   <div> { dialogs } </div>
                  
                </div>
                <div className={s.messages}>
                    { messages }
                    <div>
                       <div> <textarea ref={newMessage} 
                       onChange={onNewMessageChange}
                       value={newMessageText}
                       placeholder="type your message"></textarea></div>
                       <div> <button onClick={ onSendMessageClick }>Send message</button></div>
                   </div>
                </div>
            </div>      
        </div>
    )
}

export default Dialogs;
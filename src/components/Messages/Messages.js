import React from 'react';
import M from './Messages.module.css';
import DialogItem from './componentsMessage/DialogItem/Dialog_Item';
import MessageItem from './componentsMessage/MessageItem/MessageItem';
import { reduxForm, Field } from 'redux-form';

function Messages(props) {

    // console.log(props);

    let dialogsElements = props.messages.dialogData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/> );
    let messagesElements = props.messages.messageData.map(message => <MessageItem message={message.message} key={message.id}/>);
    // let newMessageText = props.messages.newMessageText;

    // let onSendMessageClick = () => {
    //     props.sendMessage();
    // };
    // let onNewMessageChange = (e) => {
    //     // debugger
    //     let newText = e.target.value;
    //     props.updateNewMessage(newText);
    // };

    let addNewMessage = ( value ) => {
        props.sendMessage( value.newMessageText );
    };

    // if ( props.isAuth === false) {
    //     return ( 
    //         <Redirect to={ "/login" } />
    //     )
    // };

    return (
        <div className={M.dialogs}>
            <div className={M.dialogsList}>
                { dialogsElements } 
            </div>
            <div className={M.dialogArea}>
                <div>{ messagesElements }</div>
                <AddMessageFormRedux onSubmit={ addNewMessage }/>
            </div>

        </div>
    )
};


const AddMessageForm = ( props ) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div>
                <Field name={ "newMessageText" } placeholder={ "Enter your message" } component={ "textarea" } />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm( {
    form: 'addMessageForm',
} )( AddMessageForm );

export default Messages;
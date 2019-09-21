// import React from 'react';
import { sendMessageCreator } from '../State/Messages_reducer'
import Messages from './Messages';
import  {connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import{ compose } from 'redux';

let mapStateToProps = ( state ) => {
    return {
        messages: state.messages,
    }
};
let mapDispatchTooProps = ( dispatch ) => {
    return {
        sendMessage: ( newMessageText ) => {
            dispatch( sendMessageCreator( newMessageText ) );
        },
        
    }
};

const MessagesContainer = compose( connect( mapStateToProps, mapDispatchTooProps ), withAuthRedirect )( Messages );

export default MessagesContainer;
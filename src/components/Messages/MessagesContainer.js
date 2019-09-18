// import React from 'react';
import { updateNewMessageTextCreator, sendMessageCreator } from '../State/Messages_reducer'
import Messages from './Messages';
import  {connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import{ compose } from 'redux';

// function MessagesContainer(props) {

    // console.log(props);

    

//     return( 
//     <StoreContext.Consumer>{
//         (store) =>{ 
//             let state = store.getState().messages;
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator());
//             };
//             let onNewMessageChange = (newText) => {
//                 store.dispatch(updateNewMessageTextCreator(newText));
//             };
//             return (<Messages updateNewMessage={onNewMessageChange} SendMessage={onSendMessageClick} messages={state}/>)
//         }
//     }
//     </StoreContext.Consumer>)
// };

let mapStateToProps = ( state ) => {
    return {
        messages: state.messages,
    }
};
let mapDispatchTooProps = ( dispatch ) => {
    return {
        // updateNewMessage: ( newText ) => {
        //     dispatch( updateNewMessageTextCreator( newText ) );
            
        // },
        sendMessage: ( newMessageText ) => {
            dispatch( sendMessageCreator( newMessageText ) );
        },
        
    }
};

const MessagesContainer = compose( connect( mapStateToProps, mapDispatchTooProps ), withAuthRedirect )( Messages );

// let AuthRedirectComponent = withAuthRedirect( Messages );
// // ( props ) => {
// //     if ( this.props.isAuth === false) { return ( <Redirect to={ "/login" } /> ) };
// //     return ( <Messages { ...props } /> )
// // };

// const MessagesContainer = connect( mapStateToProps, mapDispatchTooProps )( AuthRedirectComponent );

export default MessagesContainer;
// const  UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const  SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogData: [
        {id: 1, name: "Name1",},
        {id: 2, name: "Name2",},
        {id: 3, name: "Name3",},
        {id: 4, name: "Name4",},
    ],
    messageData: [
        {message: "Hi",},
        {message: "Hallow",},
        {message: "How are yuo",},
    ],  
    // newMessageText: "",
};

 const messagesReducer = (state = initialState, action) => {

    // let stateCopy;

    switch(action.type) {
        // case UPDATE_NEW_MESSAGE_TEXT:
        //     return {
        //         ...state,
        //         newMessageText: action.newText,
        //     };
        case SEND_MESSAGE:
            let text = action.newMessageText;
            return {
                ...state,
                // newMessageText: '',
                messageData: [...state.messageData,{id: 6, message: text}],
            };
        default: 
            return state;    
    }
};

export const sendMessageCreator = ( newMessageText ) => ({type: SEND_MESSAGE, newMessageText});
// export const updateNewMessageTextCreator = (Message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: Message,});

export default messagesReducer;
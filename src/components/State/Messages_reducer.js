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
};

 const messagesReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            let text = action.newMessageText;
            return {
                ...state,
                messageData: [...state.messageData,{id: 6, message: text}],
            };
        default: 
            return state;    
    }
};

export const sendMessageCreator = ( newMessageText ) => ({type: SEND_MESSAGE, newMessageText});

export default messagesReducer;
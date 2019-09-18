import profileReducer from "./Profile_ reducer";
import messagesReducer from "./Messages_reducer";

let store = {
    _state: {
        messages: {
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
            newMessageText: "",
        },
        profile: {
            postsData: [
                {id: 1, name: 'Text post',},
                {id: 2, name: 'Other text post',},
                {id: 3, name: 'Other text post again',},
            ],
            newPostText: '',
        },
    },
    _callSubscriber: null,
    
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action) {
         
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = messagesReducer(this._state.messages, action);
       
        this._callSubscriber(this._state);
    },

};




export default store;
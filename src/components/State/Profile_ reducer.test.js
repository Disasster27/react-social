import profileReducer, { addPostActionCreator, deletePost } from "./Profile_ reducer";

let State = {
    postsData: [
        {id: 1, name: 'Text post',},
        {id: 2, name: 'Other text post',},
        {id: 3, name: 'Other text post again',},
    ],
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator( "qwerty" );
       
    let newState = profileReducer( State, action );
    expect(newState.postsData.length).toBe(4);
  });

it( 'after del length of messages should be decrement', () => {
    let action = deletePost( 1 );

    let newState = profileReducer( State, action ); 

    expect(newState.postsData.length).toBe(2);
});
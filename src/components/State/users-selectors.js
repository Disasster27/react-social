import { createSelector } from "reselect";

const getUsers = ( state ) => {
    return state.usersPage.users;
};
export const getUserSuperSelector = createSelector( getUsers, ( users ) => {
    return users;
});

export const getPageSize = ( state ) => {
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = ( state ) => {
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = ( state ) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = ( state ) => {
    return state.usersPage.isFetching;
};
export const getFollowingIsProgress = ( state ) => {
    return  state.usersPage.followingIsProgress;
};
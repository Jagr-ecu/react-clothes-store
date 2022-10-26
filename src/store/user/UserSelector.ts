import { createSelector } from 'reselect';

import { UserState } from './UserReducer';
import { RootState } from '../Store';

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser    
)
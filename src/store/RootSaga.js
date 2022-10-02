import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from './categories/CategoriesSaga';
import { userSaga } from './user/UserSaga';

//generator function - "ejecuta una funcion por partes"
export function* rootSaga(){
    yield all([call(categoriesSaga), call(userSaga)])
}
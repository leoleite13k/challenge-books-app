import { all, takeLatest } from 'redux-saga/effects';

import { ListTypes } from '~/store/ducks/list';

import { loadList } from './list';

export default function* rootSaga() {
  return yield all([takeLatest(ListTypes.LOAD_REQUEST, loadList)]);
}

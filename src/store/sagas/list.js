import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import ListActions from '~/store/ducks/list';

export function* loadList({ textSearch, page }) {
  try {
    const response = yield call(
      api.get,
      `/volumes/?q=${textSearch}&startIndex=${page * 15}&maxResults=15&fields=items`,
    );

    yield put(ListActions.loadSuccess(response.data.items));
  } catch (error) {
    yield put(ListActions.loadFailure());
  }
}

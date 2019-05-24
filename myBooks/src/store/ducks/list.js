import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loadRequest: ['textSearch', 'page'],
  loadSuccess: ['items'],
  loadFailure: null,
});

export const ListTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  items: [],
  textSearch: '%27%27',
  page: 0,
  loading: false,
  error: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_SUCCESS]: (state, { items }) => state.merge({ items, loading: false, error: false }),
  [Types.LOAD_FAILURE]: state => state.merge({ loading: false, error: true }),
});

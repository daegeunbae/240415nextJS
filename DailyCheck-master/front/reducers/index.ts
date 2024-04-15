import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import optionSlice from './option';

// (이전상태, 액션) => 다음상태
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      const combinedReducer = combineReducers({
        option: optionSlice.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

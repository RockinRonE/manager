import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(
	reducers,
	// initial state
	{},
	// store enhancer
	applyMiddleware(ReduxThunk)
);

export default store; 
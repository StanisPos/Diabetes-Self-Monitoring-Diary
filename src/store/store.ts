import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { noop } from 'lodash';

const persistConfig = {
	key: 'root',
	storage,
	// whitelist: ['authReducer'],
};

const persistedReducer = persistReducer(persistConfig, noop);

const sagaMiddleware = createSagaMiddleware();
// configure middlewares
const middlewares = [sagaMiddleware];
// compose enhancers
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

// rehydrate store on app start
const initialState = {};

// create store
const store = createStore(persistedReducer, initialState, enhancer);
const persistor = persistStore(store);
sagaMiddleware.run(function*() {
	return yield;
});

// export store singleton instance
export { store, persistor };

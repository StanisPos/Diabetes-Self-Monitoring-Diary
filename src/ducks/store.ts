import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PersistConfig } from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import { noop } from 'lodash';

const sagaMiddleware = createSagaMiddleware();

const store: Store<any> = createStore(noop, composeWithDevTools(applyMiddleware(sagaMiddleware)));

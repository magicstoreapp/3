import explorerReducer from './explorer';
import sysActionReducer from './sysActions';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:'root',
    storage,
    whitelist:['explorer','sysAction']
}

const allReducers = combineReducers({
    explorer:explorerReducer,
    sysAction:sysActionReducer
});



export default persistReducer(persistConfig, allReducers);
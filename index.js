/** @format */
import {createStore} from 'redux';
import todoApp from './reducers'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

export const store = createStore(todoApp)
console.log("I've created the store.", store.getState());


AppRegistry.registerComponent(appName, () => App);

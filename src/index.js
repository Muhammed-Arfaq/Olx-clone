import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './store/FirebaseContext'; 
import { FirebaseContext } from './store/FirebaseContext';
import firebase from './firebase/config';

ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
    <Context>
    <App />
    </Context>
</FirebaseContext.Provider>, document.getElementById('root'));

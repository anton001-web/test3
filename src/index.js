import React from 'react'
import {createRoot} from "react-dom/client";
import {App} from "./App";
import {createStore} from "redux";
import {rootReducer} from "./store/reducers/rootReducer";
import {Provider} from "react-redux";

const root = createRoot(document.getElementById('root'))

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
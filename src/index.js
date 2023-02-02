import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

export const MyContext = createContext(null)

root.render(
    <MyContext.Provider value={{name:'Ostap', age: 19}}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </MyContext.Provider>

);



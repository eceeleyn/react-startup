import React from 'react';
//import named exports for curly brackets. if ı dont use curly brackets, ı am importing(içe aktarma) a default export (export burada =createRoot), which the module may not have.
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';


// öncekinde ReactDOM.render(<App/>,document.getElementById('root')) yazıyoduk. ama hata veriyodu.
const root=createRoot(document.getElementById('root'));

root.render(<App/>);


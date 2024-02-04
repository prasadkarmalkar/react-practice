import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement('h1',{},"Hello World");
const heading2 = React.createElement('h2',{},"Hello World2");
const container = React.createElement('div',{},[heading,heading2]);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)
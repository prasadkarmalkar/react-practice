import React from 'react';
import ReactDOM from 'react-dom/client';

const MyContainer = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <h2>Hello World 2</h2>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyContainer />)
import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component
{
    render()
    {
        return <h2>Welcome to React Component</h2>
    }
}

ReactDOM.render(<Car/>,document.getElementById('root'));
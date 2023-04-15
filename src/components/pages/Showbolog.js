import React from 'react';
import { useLocation } from 'react-router-dom';

const Showbolog = () => {
    const roni = useLocation()
    return (
        <div>
            <h1>{roni.state.head}</h1>
            <p>{roni.state.datas}</p>
        </div>
    );
};

export default Showbolog;
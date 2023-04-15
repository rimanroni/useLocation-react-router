import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const native = useNavigate()
    return (
        <div>
            <h2>This is Service Pages - 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit saepe labore natus iusto minima laboriosam asperiores aliquid nisi facilis aspernatur delectus dolorum voluptatibus recusandae ea assumenda possimus voluptates, aliquam iure exercitationem tempore. Consequuntur odit magni iusto aliquid, esse non eligendi!</p>
            <button onClick={()=>{native('/about')}}>go to other</button>
        </div>
    );
};

export default Service;
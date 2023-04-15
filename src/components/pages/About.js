 import React from 'react';
import { useNavigate } from 'react-router-dom';
 
 const About = () => {
    const native = useNavigate()
    return (
        <div>
        <h2>This is About pages - 2 </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihil nobis maxime quas, eius aperiam? Modi ab, ducimus dolorum sunt harum et quia quo? Amet excepturi odio tempore libero minus, impedit, unde eos distinctio consequatur corporis obcaecati maiores iusto. Atque.</p>
        <button onClick={()=>{native('/home')}}>another pages </button>
         
        </div>
    );
 };
 
 export default About;
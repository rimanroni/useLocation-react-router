import React from 'react';
import { mydata } from '../../data';
import { Link } from 'react-router-dom';
const Bolog = () => {
    const str = (str, num)=>{
        if(str.length> num){
             return str.slice(0, num) + "..."
        }else{
             return str
        }
    }
    return (
        <div>
            <h2>This is Bolog Site </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est placeat sequi possimus voluptas, aspernatur aliquam quod, sit cumque neque officia illo veritatis libero eum ipsum explicabo dolore quam adipisci voluptate!</p>
            {
                mydata.map((data) =>{
                    const {id, head, datas} = data;
                    return <section key={id}>
                         <article>
                           <h3>{head }</h3>
                           <span>{str(datas, 100)}</span> <br />
                           <Link to={head} state={{head, datas}} >see more</Link>
                         </article>
                    </section>
                })
            }
        </div>
    );
};

export default Bolog;
import React from 'react';
const text = "When every heart joins every heart and together yearns for liberty,That's when we'll be free."
let todo1 = "Work"
let todo2 = "Sleep"
let isBig = false
const About = (props) => {
    console.log(props)
    return (
        <div>
            <h1 style={{ color: 'red', textDecoration: "underline" }}>{text}</h1>
            <ul>
                <li style={{ color: 'tomato' }}>{todo1}</li>
                <li style={{ color: 'gold' }}>{todo2}</li>
            </ul>
            <h2 className={isBig ? 'big' : 'small'}>some Text</h2>

            <p>{props.inhalt}</p>
            <h4>{props.super}</h4>
        </div>
    );
}

export default About;
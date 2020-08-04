import React from 'react';


const Todo = (props) => {
    return (<li className={props.status}>
        <img src={props.linkBefore} alt="" />
        {props.todo}
        <img src={props.linkAfter} alt="" />
    </li>
    );
}

export default Todo;
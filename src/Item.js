import React from 'react';

const Item = (props) => {
    return (
        <article>
            <img src={props.link} alt="" />
            <div>
                <h3>{props.product}</h3>
                <h3>{props.price}</h3>
            </div>
            <h4>{props.description}</h4>
        </article>
    );
}

export default Item;
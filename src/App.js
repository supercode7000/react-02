import React from 'react';
import './App.css';
import Item from './Item';
import Ichbincool from './bild.jpeg';

import bill from './img/bill.png'
import book from './img/book.png'
import dance from './img/dance.png'
import eat from './img/eat.png'
import gym from './img/gym.png'
import organize from './img/organize.png'
import Todo from './Todo';

let productList = [
  {
    link: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    product: 'cocooil',
    price: '30$',
    description: 'body oil'
  },
  {
    link: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    product: 'Polaroid',
    price: '60$',
    description: 'Some Picture'
  },
  {
    link: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    product: 'Maui Moisture',
    price: '20$',
    description: 'Bambo fibers'
  }
]

const todoList = [
  {
    linkBefore: '/img1/check.png',
    todo: 'Hit the Gym',
    linkAfter: gym,
    status: 'line-through'
  },
  {
    linkBefore: '/img1/check.png',
    todo: 'Pay Bills',
    linkAfter: bill,
    status: 'line-through'
  },
  {
    linkBefore: '/img1/doing.png',
    todo: 'Meet George',
    linkAfter: dance,
    status: 'blue'
  },
  {
    linkBefore: '/img1/doing.png',
    todo: 'Buy eggs',
    linkAfter: eat,
    status: 'blue'
  },
  {
    linkBefore: '/img1/no.png',
    todo: 'Read a book',
    linkAfter: book,
    status: 'underline'
  },
  {
    linkBefore: '/img1/no.png',
    todo: 'Organize office',
    linkAfter: organize,
    status: 'underline'
  },
]


function App() {
  return (
    <div className="App">
      <ul>
        {/* {todoList.map(elt =>
          <Todo
            status={elt.status}
            linkBefore={elt.linkBefore}
            todo={elt.todo}
            linkAfter={elt.linkAfter}
          />
        )} */}
        <Todo
          status={todoList[0].status}
          linkBefore={todoList[0].linkBefore}
          todo={todoList[0].todo}
          linkAfter={todoList[0].linkAfter}
        />
        <Todo
          status={todoList[1].status}
          linkBefore={todoList[1].linkBefore}
          todo={todoList[1].todo}
          linkAfter={todoList[1].linkAfter}
        />
        <Todo
          status={todoList[2].status}
          linkBefore={todoList[2].linkBefore}
          todo={todoList[2].todo}
          linkAfter={todoList[2].linkAfter}
        />
        <Todo
          status={todoList[3].status}
          linkBefore={todoList[3].linkBefore}
          todo={todoList[3].todo}
          linkAfter={todoList[3].linkAfter}
        />
        <Todo
          status={todoList[4].status}
          linkBefore={todoList[4].linkBefore}
          todo={todoList[4].todo}
          linkAfter={todoList[4].linkAfter}
        />
        <Todo
          status={todoList[5].status}
          linkBefore={todoList[5].linkBefore}
          todo={todoList[5].todo}
          linkAfter={todoList[5].linkAfter}
        />
      </ul>
      <section>
        <Item
          link={'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
          product={'cocooil'}
          price={'30$'}
          description={'body oil'}
        />
        <Item
          link={productList[1].link}
          product={productList[1].product}
          price={productList[1].price}
          description={productList[1].description}
        />
        <Item
          link={productList[2].link}
          product={productList[2].product}
          price={productList[2].price}
          description={productList[2].description}
        />
      </section>
    </div>
  );
}


export default App;

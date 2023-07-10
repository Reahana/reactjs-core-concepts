import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  // const products = [
  //   {name: 'laptopoo', price: 153000},
  //   {name: 'phoneee', price: 93000},
  //   {name: 'watchuu', price: 33000},
  //   {name: 'tabletoo', price: 5000},
  // ]
  return (
    <div className="App">
      {/* <Counter></Counter> */}

      <ExternalUsers></ExternalUsers>


      {/* {
  products.map(product=> <Product name={product.name} price={product.price}></Product>)
 } */}
    {/* <Product name="laptop" price="47000"></Product>
 <Product name="phone" price="75000"></Product>
 <Product name="watch" price="3500"></Product> */}

    </div>
  );
}

function ExternalUsers (){
  const [users, setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return(
    <div>
      <h1>External User</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}
function User(props){
  return (
    <div style={{border: '2px solid red', margin:'20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(55);
  const increaseCount = () =>setCount(count + 1);
  const decreaseCount = () => setCount(count -1);
return(
  <div>
  <h1>Count: {count}</h1>
  <button onClick={increaseCount}>Increase</button>
  <button onClick={decreaseCount}>Decrease</button>
</div>
);
}



function Product(props){
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;

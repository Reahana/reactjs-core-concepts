import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
   <Product></Product>
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


import './App.css';
// import './screens/product.css';
import Navbar from './components/navbar'
import Main from './components/main'
// import {BrowserRouter,Route,Routes } from 'react-router-dom'
import {BrowserRouter,Route} from 'react-router-dom'
import ProductScreen  from './screens/productScreen'
// import rating from './components/rating'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Route path="/product/:id" component={ProductScreen}/>
      <Route path="/" component={Main} exact/>
    </div>
    </BrowserRouter>
  );
}

export default App;

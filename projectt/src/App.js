import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import ProductDetails from "./components/productDetails/ProductDetails";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./components/cartPage/Cart";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="*" element={<div>404 not found</div>}></Route>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
         
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

import Checkout from "./components/Checkout";
import Header from "./components/Header";
import PizzaCustomization from "./components/PizzaCustomization";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} >
            <Route index element={<PizzaCustomization />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Items from "./pages/Items.jsx";
import Checkout from "./pages/Checkout.jsx";
import NotFound from "./pages/Notfound.jsx";


export default function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />                
        <Route path="items" element={<Items />} />        
        <Route path="checkout/:id" element={<Checkout />} /> 
        <Route path="*" element={<NotFound />} />  
          
      </Route>
    </Routes>
  );
}
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<div>LIST of Cities</div>} />
          <Route path="cities" element={<div>Cities</div>} />
          <Route path="countries" element={<div>Countries</div>} />
          <Route path="form" element={<div>Form</div>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

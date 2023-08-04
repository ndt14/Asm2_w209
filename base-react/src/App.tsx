import { Footer, Header } from "./componets";
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, DetialProduct, Home, ProductManagement } from "./pages";
import LayoutWebsite from "./layouts/LayoutWebsite";
import LayoutAdmin from "./layouts/LayoutAdmin";

// import { detailProduct } from "./actions/product";

function App() {
  return (
    <>
  
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutWebsite />}>
            <Route index element={<Home />} />
            <Route path="products/:id" element={<DetialProduct />} />
          </Route>
          <Route path="admin" element={<LayoutAdmin />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
